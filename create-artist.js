const express = require('express');

const app = express();

//refer to our models
const models = require('./models');

//readline interface
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//creates prompt, takes query and runs callback with users answer
rl.question('What is the Artist name? ', (artistName) => {
    rl.question('What is the')
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    //ends the prompt
    rl.close();
  });