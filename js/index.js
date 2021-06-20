var turnCount= 0;
  var	count=1;
 var score1=0;
 var score2=0;
  //play button for choosing 2 player game
 $(".playerChoice1").on("click", playertwo);
 function playertwo(){
   
 var name1=prompt("player1 name");
var name2=prompt("player2 name");
 
 
	$(".game-button").on("click",function (){
	  $(".count").text(count);
	  var turnCount= document.querySelector(".count").innerHTML
	console.log(turnCount);
	  count=count+1;
	 
// Changing turn to X	 
 if(turnCount==1 || turnCount==3||turnCount == 5 || turnCount==7 || turnCount==9){
	$("h1"). text(name2+" :Your turn(0)");

	$(this).css("backgroundColor", "green");
	$(this).text("X");
	$(".game-button").css("color", "white");
	

	  }

	//Checking winning condition for X  
	if(
	($("#one").text()===$("#two").text()&&$("#one").text()===$("#three").text()&&$("#one").text()==="X")||
	($("#one").text()===$("#four").text()&&$("#one").text()===$("#seven").text()&&$("#seven").text()==="X")||
	($("#one").text()===$("#five").text()&&$("#one").text()===$("#nine").text()&&$("#one").text()==="X") ||
	($("#four").text()===$("#five").text()&&$("#four").text()===$("#six").text()&&$("#six").text()==="X") ||
	($("#seven").text()===$("#eight").text()&&$("#seven").text()===$("#nine").text()&&$("#nine").text()==="X") ||
	($("#two").text()===$("#five").text()&&$("#two").text()===$("#eight").text()&&$("#eight").text()==="X") ||
	($("#three").text()===$("#six").text()&&$("#three").text()===$("#nine").text()&&$("#nine").text()==="X") ||
	($("#three").text()===$("#five").text()&&$("#three").text()===$("#seven").text()&&$("#seven").text()==="X"))
	
	{alert("Game won by "+name1);
	$("h1").text(name1+" :your turn")
	score1=score1+1;
	$(".score1").text(name1+" :"+ score1);
	if(score1===5){
	  alert(name1+" won the series")
    score1=0;
    score2=0;
    $(".score2").text(name2+" :"+ score2);
    $(".score1").text(name1+" :"+ score1);
	}
      reset();
	}
	
	// changing turn to 0
	else if(turnCount==2 || turnCount==4 || turnCount==6 || turnCount==8){
	$("h1"). text(name1+" : Your turn(X)" )
	$(this).css("backgroundColor", "yellow");
	
	$(this).text("0")
	$(".game-button").css("color", "white");
	

	
	//checking winning condition for 0
	if(
	($("#one").text()===$("#two").text()&&$("#one").text()===$("#three").text()&&$("#one").text()==="0")||
	($("#one").text()===$("#four").text()&&$("#one").text()===$("#seven").text()&&$("#seven").text()==="0")||
	($("#one").text()===$("#five").text()&&$("#one").text()===$("#nine").text()&&$("#one").text()==="0") ||
	($("#four").text()===$("#five").text()&&$("#four").text()===$("#six").text()&&$("#six").text()==="0")||
	($("#seven").text()===$("#eight").text()&&$("#seven").text()===$("#nine").text()&&$("#nine").text()==="0") ||
	($("#two").text()===$("#five").text()&&$("#two").text()===$("#eight").text()&&$("#eight").text()==="0") ||
	($("#three").text()===$("#six").text()&&$("#three").text()===$("#nine").text()&&$("#nine").text()==="0")|| 
	($("#three").text()===$("#five").text()&&$("#three").text()===$("#seven").text()&&$("#seven").text()==="0")) 
	{alert("Game won by "+name2);
$("h1").text(name2+" :your turn")
    reset();
    score2=score2+1;
    $(".score2").text(name2 +" :"+score2)
    if(score2===5){
     score2=0;
     score1=0;
         $(".score2").text(name2+" :"+ score2);
    $(".score1").text(name1+" :"+ score1);

      alert(name2+" won the series")
      
    }
	}
	}
	
	//keeping turn check
		if(count===10){
	  alert("Game draw");
	  $("h1").text(name1+" :your turn")
	  reset();
		  
		}
	
	
	  }
	 ) 
}


		
		
		
		$(".score-button").on("click",function (){
		  
		  $(".score").animate({ 
		    height:'toggle'
		  });
		  
		})
		
		
		//reset button
	$(".reset").on("click", reset);
	//reset function
	function reset(){
	$(".game-button"). css("backgroundColor", "white");
	
	$(".game-button"). css("color", "white");
	$("#one").text("1");
	$("#two").text("2");
	$("#three").text("3");
	$("#four").text("4");
	$("#five").text("5");
	$("#six").text("6");
	$("#seven").text("7");
	$("#eight").text("8");
	$("#nine").text("9");
	$(".count").text("1");
	count=1;
	turnCount=0;
	
	}
	
