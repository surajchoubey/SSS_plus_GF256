const { generate_shares } = require('./main.js');
const fs = require('fs');
const prompt = require("prompt-sync")({ 
	sigint: true 
});

export const main = (args) => {

    const input = args[2];
    const number_of_shares = Number(args[3]); // Number(prompt("Enter number of shares to be made: "));    
    const number_of_min_shares = Number(args[4]); // Number(prompt("Enter minimum number of shares to create original secret key: "));
    let filename = args[5];

    const shares = generate_shares(number_of_shares, number_of_min_shares, input);

    // console.log(shares);

    let output = "";

    for (const [key, values] of Object.entries(shares)) {
        
        let line = `${key}:`

        for(const value of values) {
            line += `${value},`;
        }

        output += line.slice(0,-1) + '\n';
    }

    if(!filename) filename = 'shares.txt';

    fs.writeFileSync(`${filename}`, output);
    console.log(`Each share is successfully written to ${filename}`);

}