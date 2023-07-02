import arg from 'arg'
import inquirer from 'inquirer'
import { createProject } from './create-project.js'

const argDefinitions = {
  '--git': Boolean,
  '--yes': Boolean,
  '--install': Boolean,
  '-g': '--git',
  '-y': '--yes',
  '-i': '--install',
}

export async function promptForMissingOptions(options) {
  const defaultTemplate = 'JavaScript'
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    }
  }

  const questions = []
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: ['JavaScript', 'TypeScript'],
      default: defaultTemplate,
    })
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
  }
}

export function parseArgumentsIntoOptions(argv) {
  const args = arg(argDefinitions, { argv })

  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false,
  }
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  console.log(options)
  await createProject(options)
}
