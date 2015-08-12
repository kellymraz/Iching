$(document).ready(function() {
  $.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

// Iching has 3 coins!!!

// Switch out http... for img src=images/dragoncoin-tails.png and similarly image for heads 
$.preloadImages("images/dragoncoin-heads.png", 
	"images/dragoncoin-tails.png") 

$('h1').addClass('animated fadeInDown');
function flipMe(whichCoin){
	var flip = ["heads","tails"];
	var side = flip[Math.floor(Math.random()*flip.length)];
	

	if(side == "heads"){
		
		
		$(whichCoin).html('<img class="heads" src="images/dragoncoin-heads.png"/>');

	} else {
		
		$(whichCoin).html('<img class="tails" src="images/dragoncoin-tails.png"/>');
	}

	$(whichCoin).find('img').removeClass('animated flip')
	$(whichCoin).find('img').addClass('animated flip');
}

// $(".coinTossButton").click(flipMe);
$(".coinTossButton").click(function(e){
	e.preventDefault();
	flipMe('#coin01');
	flipMe('#coin02');
	flipMe('#coin03');


});


		});
