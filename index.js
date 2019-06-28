#!/usr/bin/env node

const program = require('commander');
const app = require('./controller');

program
    .version('0.0.1')
    .description('cmdVerticalTitle')
    .option('-p, --path <filePath>', 'your file src')
    .option('-i, --id <filePath>', 'your entry id');

program.parse(process.argv);

app(program.path, program.id);

