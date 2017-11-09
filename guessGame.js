function ingredients(btn) {
	var count = 0;
	var scoreRight = 0;
	var scoreWrong = 0;
    var guess = false;
	var ingredientsArray = ["Skechers","Converse","Sperry","newBalance","Timberland","Aerosoles","Birker Stock","Clarks","Ecco","Aetrex","Stacy Adams","Wolky","Rockport","Dockers","Nunn Bush","Teva","Pikolinos","Romika","Haflinger","Born","Keen","Josef Seibel","Earthies","Earth"];		
	var x = document.getElementById(btn).innerHTML;
	for(var i = 0; i < ingredientsArray.length; i++){
	    if(ingredientsArray[i] == x ){
		   count++;
		   guess = true;
		   document.getElementById(btn).className = "correct";
		   scoreRight++;
		   alert(scoreRight);
		}
		else{
		  scoreWrong++;
		  alert(scoreWrong);
		}
	}
	    if(guess == false){
			document.getElementById(btn).className = "error";
		}
        if(count == 25){
           window.location.href = "guessGameScor.html"
        }		
	document.getElementById('yourScoreNum').innerHTML = scoreRight + '/ 30';
}