#!/usr/bin/env node
import { rpsls } from "../lib/rpsls.js"
import minimist from "minimist"

// this is what will run when i link/install the package and run node-rpsls

const args = minimist(process.argv.slice(2));

if (args._.length <= 2) {
    console.log(JSON.stringify(rpsls()))
} else if (args._.length > 3) {
    console.error("ERROR: arguments out of range")
} else {
    console.log(JSON.stringify(rpsls(args._.slice(2))))
}

if(args.help || args.h) {
	console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
    process.exit(0);
}

if(args.rules || args.r) {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    process.exit(0);

}

const length = args._.length
const play = args._[0];
switch (length) {
case 0:
	console.log(JSON.stringify(rpsls("null")));
	process.exit(0)
case 1:
	if (play == "rock" || play == "paper" || play == "scissors" || play == "lizard" || play == "spock") {
		console.log(JSON.stringify(rpsls(play)));
		process.exit(0);
} else {
		console.log("You can't play [play], bestie.");
		console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    process.exit(0);
}
}
