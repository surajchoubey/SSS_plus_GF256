# SSS_plus_GF256

This is the basic implementation of Shamir Sharing Algorithm coupled with GF256 using NodeJS.
The user can make `n` shares for the original secret key for use minimum `k` keys to generate the original secret key.

## Setup
Clone the repo, `cd` into it, and install node package modules.

```ruby
git clone https://github.com/surajchoubey/SSS_plus_GF256/
cd SSS_plus_GF256/
npm install
```
## Running the program

Assuming you are in the same directory run it using `node .`
Input some string alphanumeric preferably and you can see the output right here.
In the below test, 10 shares generated and minimum 3 shares required to create the original secret key.
Currently, user can enter a word and generate `n` keys for it and rebuild also using minimum `k` minimum keys.

```ruby
{
  '1': Uint8Array(9) [
    90, 90,  27, 1, 121,
    59, 96, 109, 1
  ],
  '2': Uint8Array(9) [
    101, 221,  10, 104,
    203, 230, 148, 199,
    131
  ],
  '3': Uint8Array(9) [
     92, 254,  97,   1,
    215, 175, 155, 201,
    233
  ],
  '4': Uint8Array(9) [
    164, 143,  2,  13,
     76,  89, 59, 230,
     80
  ],
  '5': Uint8Array(9) [
    157, 172, 105, 100,
     80,  16,  52, 232,
     58
  ],
  '6': Uint8Array(9) [
    162,  43, 120, 13,
    226, 205, 192, 66,
    184
  ],
  '7': Uint8Array(9) [
    155,   8,  19, 100,
    254, 132, 207,  76,
    210
  ],
  '8': Uint8Array(9) [
    247, 44, 186, 45,
    148, 68,  21,  7,
    240
  ],
  '9': Uint8Array(9) [
    206, 15, 209, 68,
    136, 13,  26,  9,
    154
  ],
  '10': Uint8Array(9) [
    241, 136, 192,  45,
     58, 208, 238, 163,
     24
  ]
}
```
