// main file where i will put imported rps and rpsls functions

export function rps(hand) {
    var opp = "null";
	const random = randInt(3);
	switch (random) {
	case 1:
		var opp = "rock"
		break;	
	case 2:
		var opp = "paper"
		break;	
	case 3:
		var opp = "scissors"
		break;	
	default:
		console.log("don't want this msg");
		console.log(random)
		return 0;
	}
	
	if(hand == "null")
    {
		var ret = { player: opp };
		return ret;
    }
    
	let LC_hand = hand;
	var res = winloss(LC_hand, opp)
	var ret = { "player": LC_hand, "opponent": opp, "result": res };
	return ret;
}

export function rpsls(hand) {
    var opp = "null";
	const random = randInt(5);
	switch (random) {
	case 1:
		var opp = "rock"
		break;	
	case 2:
		var opp = "paper"
		break;	
	case 3:
		var opp = "scissors"
		break;
	case 4:
		var opp = "lizard"
		break;
	case 5:
		var opp = "spock"
		break;	
	default:
		console.log("don't want this msg");
		console.log(random)
		return 0;
	}
	
	if(hand == "null")
    {
		var ret = { player: opp };
		return ret;
    }
    
	let LC_hand = hand;
	var res = winloss(LC_hand, opp)
	var ret = { "player": LC_hand, "opponent": opp, "result": res };
	return ret;
}

function winloss(LC_hand, opp){
    if (LC_hand == opp) var res = "tie";
	if (LC_hand == "rock" && (opp == "paper" || opp == "spock")) var res = "lose";
	if (LC_hand == "rock" && (opp == "scissors" || opp == "lizard")) var res = "win";
	
	
	if (LC_hand == "paper" && (opp == "scissors" || opp == "lizard")) var res = "lose";
	if (LC_hand == "paper" && (opp == "rock" || opp == "spock")) var res = "win";


	if (LC_hand == "scissors" && (opp == "rock" || opp == "spock")) var res = "lose";
	if (LC_hand == "scissors" && (opp == "paper" || opp == "lizard")) var res = "win";


	if (LC_hand == "lizard" && (opp == "rock" || opp == "scissors")) var res = "lose";
	if (LC_hand == "lizard" && (opp == "paper" || opp == "spock")) var res = "win";


	if (LC_hand == "spock" && (opp == "rock" || opp == "scissors")) var res = "win";
	if (LC_hand == "spock" && (opp == "paper" || opp == "lizard")) var res = "lose";
	return res;
}

function randInt(choices) {
	const rand = Math.floor(Math.random() * choices + 1);
	return rand;
  }