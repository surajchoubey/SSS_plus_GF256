const { generate_shares } = require('./main.js');
const fs = require('fs');
const prompt = require("prompt-sync")({ 
	sigint: true 
});

const main = () => {

    const input = prompt("Enter a string: (e.g. cypherock) ")
    const number_of_shares = Number(prompt("Enter number of shares to be made: "));    
    const number_of_min_shares = Number(prompt("Enter minimum number of shares to create original secret key: "));

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

    fs.writeFileSync("shares.txt", output);
    console.log("Each share is successfully written to shares.txt");

}

// execute main function
main();