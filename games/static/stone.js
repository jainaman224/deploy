var b = "user";
var submit=document.querySelector('.sub');
var input=document.querySelector('.inp');
submit.addEventListener("click",calc,false);
function calc(){
  b = input.value;
  document.getElementsByClassName('print')[0].innerHTML = "Welcome " + b.toUpperCase();
}

var user = 0;
var computer =0;

function myscript(){
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  var userChoice=userChoice.toLowerCase();
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
	 computerChoice = "rock";
  } 
  else if(computerChoice <= 0.67) {
  	computerChoice = "paper";
  } 
  else {
  	computerChoice = "scissors";
  }


  document.getElementsByClassName('hell')[0].innerHTML=b.toUpperCase() + " Choice : " + userChoice;
  document.getElementsByClassName('hello')[0].innerHTML="Computer Choice : " + computerChoice;

  var compare=function (choice1,choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }
    else if(choice1 === "rock"){
  	  if(choice2 === "scissors"){
  			user=user+1;
      	return "CONGRATULATIONS! You Win";
      }
      else {
    		computer=computer+1;
        return "Computer Wins";
      }
    }
    else if(choice1 === "paper"){
     	if(choice2 === "rock"){
     		user=user+1;
    		return "CONGRATULATIONS! You Win";
    	}
    	else {
    		computer=computer+1;
      	return "Computer Wins";
      }
    }
    else if(choice1 === "scissors"){
  		if(choice2 === "paper"){
     		user=user+1;
    		return "CONGRATULATIONS! You Win";
    	}
    	else {
      	computer=computer+1;
      	return "Computer Wins";
      }
    }
    else {
    	return "Invalid Choice";
    }
  }
  document.getElementsByClassName('lm')[0].innerHTML="Play Again";
  document.getElementsByClassName('hi')[0].innerHTML=compare(userChoice,computerChoice);
  document.getElementsByClassName('bye')[0].innerHTML= b.toUpperCase() + "&nbsp Computer" + "<br>" + user + " &nbsp : &nbsp &nbsp &nbsp" + computer + " &nbsp &nbsp ";
}