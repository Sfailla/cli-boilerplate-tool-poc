import { cli, parseArgumentsIntoOptions } from '../src/cli.js'

describe('cli function', () => {
  it('should call the cli function', () => {
    expect(cli).toBeDefined()
  })

  it('should parse arguments and return options object', () => {
    const argv = ['--git', '--yes', '--install', 'JavaScript']
    const options = parseArgumentsIntoOptions(argv)
    expect(options).toEqual({
      skipPrompts: true,
      git: true,
      template: 'JavaScript',
      runInstall: true,
    })
  })
})
