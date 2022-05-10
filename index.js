const { generate_shares, rebuild_parts } = require('./main.js');
const utf8encoder = new TextEncoder();
const utf8decoder = new TextDecoder();

const main = () => {

    const shares = generate_shares(4, 2, "cypherock");
    // console.log());

    console.log(shares);

    const parts = { 
        '1' : shares['1'],
        '3' : shares['3']
    };
    // console.log(Object.keys(parts));

    const generated_key = rebuild_parts(parts);
    console.log(generated_key);

}

// execute main function
main();