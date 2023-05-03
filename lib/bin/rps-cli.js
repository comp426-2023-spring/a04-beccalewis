#!/usr/bin/env node
import { rps } from "../lib/rpsls.js"
import minimist from "minimist"

//this is the file that runs when i link/install the package and run node-rps

const args = minimist(process.argv.slice(2));

if(args.help || args.h) {
	console.log(`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    process.exit(0);
}

if(args.rules || args.r) {
    console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);
    process.exit(0);
}



const length = args._.length
const play = args._[0]
switch (length) {
case 0:
	console.log(JSON.stringify(rps("null")));
	process.exit(0)
case 1:
	if (play == "rock" || play == "paper" || play == "scissors") {
		console.log(JSON.stringify(rps(play)));
		process.exit(0);
} else {
		console.log("You can't play that, bestie.");
		console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);
    process.exit(0);

}

}