// Code (kind of) for the hexagram to connect to the lesson page:
// $().on("click, '#one-solid", function?? )"listen for event on dynamically created element"
// Look at "Delegated Event Syntax" for help

// var flipACoin = function() {


// 	var headorTail = Math.random();

// 	if (headorTail > .5) {
 	
// 		// console.log( "HEADS, value of 3")
//  		return 3;
	

// 	}

// 	else { 
 	
//  		// console.log("TAILS, value of 2")
//  		return 2;

// 	}

// }

// //////////////////////////////////////////////////


// var coinFlipSum = function() {

// 	var value = 0

// 	for(i = 0; i < 3; i ++) {

// 		value += flipACoin()

// }


// return value ;
	
// }

// var totalCoinValue = coinFlipSum();


// console.log("totalCoinValue:  " , totalCoinValue)

// // ///////////Jquery///////////////////////////
// var clickCount = 0



// $(".coinTossButton").click(function(event) {
// 	event.preventDefault()
// MAKING THE COINS FLIP/BOUNCE ///
// Below begins the code for Animate.css Coin Flip //////

$(document).ready(function() {
  $.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

// Iching has 3 coins!!!

// Switch out http... for img src=images/dragoncoin-tails.png and similarly image for heads heads
$.preloadImages('<img src="images/dragoncoin-heads.png">', '<img src="images/dragoncoin-tails.png">');
$('h1').addClass('animated fadeInDown');
				function flipMe(){
					var flip = ["heads","tails"];
					var side = flip[Math.floor(Math.random()*flip.length)];

					if(side == "heads"){
						
						
            $(".image").html('<img class="heads" src="images/dragoncoin-heads.png"/>');
						$('.heads').addClass('animated flip');	
					}else{
						
            $(".image").html('<img class="tails" src="images/dragoncoin-tails.png"/>');
						$('.tails').addClass('animated flip');
					}
				}

				$(".coinTossButton").click(flipMe);
		});

// End Animate.css coin
// END MAKING THE COINS FLIP/BOUNCE ///////	

// clickCount = clickCount + 1;

// 	if(clickCount >= 7) {
// 		return
// 	}

// var coin1=flipACoin()
// 	var coin2=flipACoin()
// 	var coin3=flipACoin()

// 	console.log(coin1, coin2, coin3)



// console.log(clickCount)







		
	
// 	if (coin1 == 2){
// 		$(".coinContainer1").html('<img src="images/dragoncoin-tails.png">')
// 	}

// 	else {
// 		$(".coinContainer1").html('<img src="images/dragoncoin-heads.png">')

// 	}

	


// 	if (coin2 == 2){
// 		$(".coinContainer2").html('<img src="images/dragoncoin-tails.png">')
// 	}

// 	else {
// 		$(".coinContainer2").html('<img src="images/dragoncoin-heads.png">')

// 	}

	
// 	if (coin3 == 2){
// 		$(".coinContainer3").html('<img src="images/dragoncoin-tails.png">')
// 	}

// 	else {
// 		$(".coinContainer3").html('<img src="images/dragoncoin-heads.png">')

// 	}

// // Below is the part that draws the hexagram as the coins are tossed

// // 

// 	if (isEven(coin1 + coin2 + coin3)) {
// 			$(".hexContainer").prepend('<img class="displayBlock" src="images/two-spaced.png">')
// 		}

		

// 	else {
// 		$(".hexContainer").prepend('<img class="displayBlock" src="images/one-solid.png">')

// 		}




// 	console.log("the button was clicked")


// });


////////////////////////////////////////////////
// Below is the function that determines whether the total of the three coins adds up to an ODD or EVEN number.

var isEven = function(totalCoinValue) {

	console.log("total coin value:  ", totalCoinValue);

	return (totalCoinValue % 2 === 0) ? true : false;

		
}
         // MAKING THE COINS FLIP/BOUNCE ///
// Below begins the code for Animate.css Coin Flip //////
// It has been copied to the file coin-flip practice in the js folder Tuesday 8/11


// End Animate.css coin
// END MAKING THE COINS FLIP/BOUNCE ///////




// 
// This odd or even recognizer will determine whether a hexagram line will be drawn as solid (if odd) or 
// 	broken (if even)

// Make a button that will start the coin toss
// Will have to be clicked six times and form the hexagram

// Make 3 coin images that will flip/bounce when that button
// is pressed

// Create the hexagram, bottom-up, drawing broken or unbroken lines based on totalCoinValue being even (broken line)  or uneven (solid line)

// Recreate the Trigram chart?  

// Click into the right hexagram as determined in the Trigram chart?