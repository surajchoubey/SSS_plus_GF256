const { rebuild_parts } = require('./main.js');
const fs = require('fs');

export const main = (filename) => {

    if(!filename || filename == '') filename = 'parts.txt';
    const content = fs.readFileSync(`${filename}`, 'utf-8');
    const split1 = content.split('\n');

    const parts = {};

    for(const item of split1) {

        if(item != '') {
            const [key, value] = item.split(':');

            let split2 = value.split(',');

            split2.forEach(item => {
                Number(item);
            })

            parts[key] = Uint8Array.from(split2);
        }
    }

    const generated_key = rebuild_parts(parts);
    console.log(generated_key);
}