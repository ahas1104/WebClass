function play(){

var startingBet = document.getElementById("startingBet").value;
var money = 0;
var die1 = 0;
var die2 = 0;
var dice = 0;
var Tally = 0;
var counter = 0;
var money = startingBet;
var moneyHeld = [startingBet];
var win = 4;
var loss = 1;
var maxHeld = 0;



	do{

		Tally++;
		die1 = Math.floor(Math.random() * 6) + 1;
		die2 = Math.floor(Math.random() * 6) + 1;
		dice = die1+die2;


			if (dice == 7){
			money = money+win;
			var last_element = moneyHeld[moneyHeld.length -1];
			var last_updated = last_element + win;
			moneyHeld.push(last_updated);
			}

      else {
			money--;
			counter++;

			var last_element = moneyHeld[moneyHeld.length -1];
			var last_updated = last_element - loss;
			moneyHeld.push(last_updated);
			Tally = Tally++;
			}


	}while(money>0);
	var totalMax = 0;

	totalMax = Math.max.apply(Math, moneyHeld);
	numRolls = moneyHeld.indexOf(totalMax);
	if(numRolls<1){
		numRolls = 0;
	}

	document.getElementById("p1").innerHTML=("<center><p>-----------</p><table style=\" width: 100% height: 100%;\"><th colspan=\"2\"; class=\"th1\">Results</th><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">$" + startingBet + ".00</th></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ Tally +"</td></tr><tr><td>Highes Amount Won</td><td>"+totalMax+"</td></tr><tr><td>Roll Count at Highest Amount Held</td><td>"+ numRolls + "</td></tr></table></center>");
	document.getElementById("p2").innerHTML="Play Again";

} 
