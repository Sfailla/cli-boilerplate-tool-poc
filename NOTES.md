# Resources for CLI Tools

### Yargs package

- used for destructuring flags from the command line
- download yargs package: [yargs](https://www.npmjs.com/package/yargs)

example:

```javascript
  const yargs = require('yargs');
  const { argv } = yargs(process.argv)

  --title="This is my title" --body="This is my body"

  // convert to
  { title: 'This is my title', body: 'This is my body' }

  // access
  argv.title
  argv.body
```

### Inquierer package

- used for creating and reading interactive prompts and user input
- download inquierer package: [inquierer](https://www.npmjs.com/package/inquirer)
- inquierer docs: [inquierer docs](https://github.com/SBoudrias/Inquirer.js)

example:

```javascript
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

prompt([
  // each question is an object
  { type: "input" name: "title", message: "Enter a title for the book" }
]).then(answers => {
  const title = answers.title;
  console.log(title)
})

// type can be input or list.  list type has a choices property which allows you to pass an array of choices
example:

prompt([
  { type: "list" name: "title", message: "Enter a title for the book", choices: ["one", "two", "three"] }
]).then(answers => {
  const title = answers.title;
  console.log(title)
})
```
