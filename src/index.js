#!/usr/bin/env node

const boxen = require('boxen')
const terminalLink = require('terminal-link')
const chalk = require('chalk')

const webLink = chalk.blue(terminalLink('jacobwgillespie.com', 'https://jacobwgillespie.com'))
const githubLink = chalk.blue(terminalLink('github.com/jacobwgillespie', 'https://github.com/jacobwgillespie'))
const twitterLink = chalk.blue(terminalLink('twitter.com/jacobwgillespie', 'https://twitter.com/jacobwgillespie'))

const lines = [
  chalk.green.bold('          Jacob Gillespie'),
  '',
  chalk.gray('   Work:  ') + 'Staff Platform Engineer at EraDB',
  chalk.gray('    Web:  ') + webLink,
  chalk.gray(' GitHub:  ') + githubLink,
  chalk.gray('Twitter:  ') + twitterLink,
]

console.log(boxen(lines.join('\n'), {borderStyle: 'round', padding: 1}))
