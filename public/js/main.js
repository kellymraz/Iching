// This part makes the 3 conins flip

$(document).ready(function() {
  $.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}


$.preloadImages("images/dragoncoin-heads.png", 
	"images/dragoncoin-tails.png") 

var isEven = function(totalCoinValue) {
 
	console.log("total coin value:  ", totalCoinValue);
 
	return (totalCoinValue % 2 === 0) ? true : false;
 
}

$('h1').addClass('animated fadeInDown');
function flipMe(whichCoin){
	var coin=0;

	var flip = ["heads","tails"];
	var side = flip[Math.floor(Math.random()*flip.length)];
	

	if(side == "heads"){
		coin=3
		$(whichCoin).html('<img class="heads" src="images/dragoncoin-heads.png"/>');

	} else {
		coin=2
		$(whichCoin).html('<img class="tails" src="images/dragoncoin-tails.png"/>');
	}

	$(whichCoin).find('img').removeClass('animated flip')
	$(whichCoin).find('img').addClass('animated flip');
	return coin;
}

var clickCount = 0

$(".coinTossButton").click(function(e){
	e.preventDefault();

clickCount = clickCount + 1;
	if(clickCount >= 7) {
		return
}

var coin01=flipMe('#coin01');
var coin02=flipMe('#coin02');
var coin03=flipMe('#coin03');

console.log("coin01 ", coin01)
console.log("coin02 ", coin02)
console.log("coin03 ", coin03)

console.log("isEven ", isEven(coin01 + coin02 + coin03))

	if (isEven(coin01 + coin02 + coin03)) {
		$(".hexContainer").prepend('<img class="displayBlock" src="images/two-spaced.png">')
		
		}
 
		
	else {
	$(".hexContainer").prepend('<img class="displayBlock" src="images/one-solid.png">')
 


	
		}


});


		});

// This part draws the hexagram based on the total value of the 3 coins added together.  Heads are worth 3, tails are worth 2


console.log("isEven ", isEven(coin01 + coin02 + coin03))



	if (isEven(coin01 + coin02 + coin03)) {
		$(".hexContainer").prepend('<img class="displayBlock" src="images/two-spaced.png">')
		
		}
 
		
	else {
	$(".hexContainer").prepend('<img class="displayBlock" src="images/one-solid.png">')
 


	
		}
 
 	




// ////////////////Below keeps the number of clicks at 6

// ///////////Jquery///////////////////////////
// var clickCount = 0



// $(".coinTossButton").click(function(event) {
// 	event.preventDefault()

// clickCount = clickCount + 1;

// 		return
// 	if(clickCount >= 7) 

	



















