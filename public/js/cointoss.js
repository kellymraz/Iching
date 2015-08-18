var getLesson = function(){
 	var hexLesson = [];
 	var get
 }






// This part handles the coin images and makes the 3 coins flip

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

// clickCount makes sure only six lines are drawn to make the hexagram
var clickCount = 0

hexagram = [];

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

// This part draws the hexagram based on the total value of the 3 coins added together.  Heads are worth 3 "points", tails are worth 2 "points".  If the coins add up to an even number=broken line; else a solid line

console.log("isEven ", isEven(coin01 + coin02 + coin03))

	if (isEven(coin01 + coin02 + coin03)) {
		hexagram.push("0")
		var hexMaker=function(){
			$(".hexContainer").prepend('<img class="displayBlock" id="two-spaced" src="images/two-spaced.png">')
			$("#two-spaced").fadeIn().css({display:"block"})
		}
		
		var myWaitForCoins=setTimeout(hexMaker, 1200)

	}
 
		
	else {
		hexagram.push("1")
		var hexMaker=function(){
			$(".hexContainer").prepend('<img class="displayBlock" id="one-solid" src="images/one-solid.png">')
			$("#one-solid").fadeIn().css({display:"block"})
	 
		}
		var myWaitForCoins=setTimeout(hexMaker, 1200)
	}

// setInterval(hexContainer, 5000)
// This makes the button that takes the user to the lesson show up after the 6th click 6th click
	console.log("hexagram:", hexagram);

	if(clickCount === 6) {
		var newhex = hexagram.join('');
		console.log("joined hexagram:", newhex)

		var showhexButton=$('<a class="btn btn-default" href="/hexLesson/' + newhex + '">Click here for your advice</a>')
		setTimeout(function(){
			$(".hexButtonContainer").append(showhexButton)
		},2000)
		
		
 	}

 		


	




});

});
// // End coin toss and drawing of hexagram/////////////////// 
 	





	



















