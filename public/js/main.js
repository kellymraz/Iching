$(document).ready(function() {
  $.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

// Iching has 3 coins!!!

// Switch out http... for img src=images/dragoncoin-tails.png and similarly image for heads heads
$.preloadImages("images/dragoncoin-heads.png", 
	"images/dragoncoin-tails.png") 

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
