const { generate_shares, rebuild_parts } = require('./main.js');
const utf8encoder = new TextEncoder();
const utf8decoder = new TextDecoder();

const main = () => {

    const shares = generate_shares(10, 3, "cypherock");

    console.log(shares);

    const parts1 = { 
        '1' : shares['1'],
        '10' : shares['10'],
        '5': shares['5']
    };

    const parts2 = { 
        '2' : shares['2'],
        '9' : shares['9'],
        '5': shares['5']
    };

    const parts3 = { 
        '3' : shares['3'],
        '8' : shares['8'],
        '5': shares['5']
    };

    const parts4 = { 
        '4' : shares['4'],
        '7' : shares['7'],
        '6': shares['6']
    };

    const parts5 = { 
        '5' : shares['5'],
        '6' : shares['6'],
        '9': shares['9']
    };

    const generated_key1 = rebuild_parts(parts1);
    const generated_key2 = rebuild_parts(parts2);
    const generated_key3 = rebuild_parts(parts3);
    const generated_key4 = rebuild_parts(parts4);
    const generated_key5 = rebuild_parts(parts5);

    console.log(generated_key1);
    console.log(generated_key2);
    console.log(generated_key3);    
    console.log(generated_key4);
    console.log(generated_key5);

}

// execute main function
main();