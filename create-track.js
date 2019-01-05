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
rl.question('What is the Track name? \n', (trackName) => {
    rl.question('What is the Album id? \n', (albumID) => {
        rl.question('Duration in Seconds? \n', (duration) => {
             //refer to table and enter information using create method. pass an object using the tables column names and the user entries
             models.track.create({
                track_name: trackName,
                duration: duration,
                album_id: albumID
                
            })
            //ends the prompt does not end node
            rl.close();
        });
    });
  });