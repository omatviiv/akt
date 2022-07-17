#! /usr/bin/env node
import fs from 'node:fs/promises';
import { program } from 'commander';
// import pckg from '../package.json' assert { type: 'json' };

program
  // .version(pckg.version)
  .option('-f, --first', 'a test option')
  .command('init')
  .option('-p, --path', 'a path where akt folder will be generated')
  .action((name, options, command) => {
    console.log('command generate-data-template was run');
    console.log('name', name);
    console.log('options', options);
  });

program.parse();

console.log(program.opts());
