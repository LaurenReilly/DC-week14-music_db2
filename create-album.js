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
rl.question("What is the Album name?\n ", albumName => {
    rl.question("What is the Album year?\n ", albumYear => {
        rl.question("What is the Artist id?\n ", artistID => {

            //refer to table and enter information using create method. pass an object using the tables column names and the user entries
            models.album.create({
                album_name: albumName,
                album_year: albumYear,
                artist_id: artistID
            })
            //ends the prompt does not end node
            rl.close();
        });
    });
});