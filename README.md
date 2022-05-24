# Shamir Secret Sharing using GF256

![animation gif here experimental demo](animation.gif)

This is a command line application which is an implementation of Shamir Sharing Algorithm coupled with GF256 using NodeJS.
The user can make `n` shares for the original secret key for use minimum `k` keys to generate the original secret key.
It is very secure and uses advanced mathematics to create the secret shares. To use it as an CLI application just add the `bin` folder to your path environment variable. For more information you can have a look on to:

### REFERENCES
1. [Shamir Secret_Sharing](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing)
2. [Finite Field Theory](https://en.wikipedia.org/wiki/Finite_field_arithmetic)

NOTE: Please take care of the text file formatting where keys are stored or else it may not work properly. Do it exactly as it is given in the examples below.

## Setup
Clone the repo, `cd` into it, and install node package modules.

```ruby
git clone https://github.com/surajchoubey/SSS_plus_GF256/
cd SSS_plus_GF256/
npm install
```
## Running the program

After getting the above task done, and assuming you are in the `bin` directory.

## To create the N shares and use minimum K shares to unlock

Here you need to take care of 4 parameters passed as arguments.
1. `[secret-text]` is the original secret key you want to make shares of.
2. `[N]` is the total number of secret keys you want to generate.
3. `[K]` is the minimum number of shares you want to use to reproduce the original secret key.
4. `[filename]` is the name of the file where you want to store all the keys.
<br>
General format for running `generate_shares` CLI application.

```ruby
generate_shares [secret-text] [N] [K] [filename]
```

```ruby
generate_shares intelligence 15 5 store.txt
Each share is successfully written to store.txt
```
or you can use the below method and all your secret keys are stored in `shares.txt` in the same directory by default if you leave the argument.
```ruby
generate_shares intelligence 15 5
Each share is successfully written to shares.txt
```

`shares.txt` from inside looks like this.
```
1:85,40,44,30,82,14,1,36,48,126,113,96
2:53,74,231,197,65,96,90,6,110,56,60,138
3:138,210,67,144,185,183,244,41,144,132,0,30
4:49,226,154,213,29,216,233,167,65,56,155,86
5:42,86,252,74,129,41,35,151,195,237,109,24
6:25,108,168,30,90,11,176,139,101,121,175,93
7:129,6,50,175,0,79,188,215,76,0,119,130
8:112,108,129,22,248,117,0,159,179,227,137,235
9:234,154,252,104,77,143,227,160,13,76,158,171
10:15,153,249,215,178,141,84,75,90,199,183,106
11:22,177,120,135,193,194,113,24,79,196,142,187
12:165,199,16,211,244,99,253,1,244,13,4,185
13:24,195,83,73,227,10,188,77,157,103,247,178
14:174,152,201,121,212,68,195,152,50,62,81,220
15:144,66,118,205,5,152,68,184,240,248,140,70
```

## Reproducing the original key using atleast K keys

As we generated the keys using `generate_shares` we can reproduce the original secret key, (illustrated for the word intelligence above).
Store the keys labelled by their ID in some file called `parts.txt`

`parts.txt` should ideally look like this from inside. In here keys labelled `3`, `7` ,`8`, `10` and `14` (5 minimum keys as set above to reproduce the original secret key).

```
3:138,210,67,144,185,183,244,41,144,132,0,30
8:112,108,129,22,248,117,0,159,179,227,137,235
14:174,152,201,121,212,68,195,152,50,62,81,220
10:15,153,249,215,178,141,84,75,90,199,183,106
7:129,6,50,175,0,79,188,215,76,0,119,130
```

Here you need to take care of only one parameter which is passed as argument that is the filename containing the keys.
<br>
General format for running `rebuild_parts` CLI application.

```ruby
rebuild_parts [filename]
```
Run the app as CLI using:
```ruby
rebuild_parts parts_stored.txt
intelligence
```
or you can use the below method and it will assume to read from `parts.txt` in the same directory by default if you leave the argument.
```ruby
rebuild_parts
intelligence
```

