
var computer = document.querySelector('#computer');
var username = document.querySelector('#name');
var user = document.querySelector('#user');
var title = document.querySelector('#title');
var result = document.querySelector('#result');
var btn = document.querySelectorAll('button');
var score = document.querySelector('#score');


var userchose
var computerchose
var newResult

var allScore = 0;


for(var i = 0 ; i < btn.length ; i++){
    btn[i].addEventListener("click",(e)=>{
       
     if(username.value == ""){
         title.classList.add("resultlose")
         title.innerHTML = "Enter your name first"
     }else{
        title.classList.remove("resultlose")
        title.innerHTML = "Start the game";
        // console.log(e.target)

        // console.log(e.target.classList)
        // console.log(e.target.classList[2])
        // console.log(e.target.id)
  
  
          userchose = e.target.id
          user.innerHTML = userchose
          getComputerchoice();
          getResult()
     }
     
       
    })
}

function getComputerchoice(){
    var choice = Math.floor(Math.random() * 3 + 1 );
    
    if(choice == 1){
        computerchose = "rock"
    }

    if(choice == 2){
        computerchose = "paper"
    }

    if(choice == 3){
        computerchose = "scissors"
    }

    computer.innerHTML = computerchose

}


function getResult(){

    // console.log(computerchose)
    // console.log(userchose)

     var res 

    if(computerchose === userchose){
        newResult = "it's a draw"
         res = 0
    }

    if(computerchose === "rock" && userchose === "scissors"){
        newResult = username.value +" lose!"
        res = 1
   }
   if(computerchose === "paper" && userchose === "scissors"){
         newResult = username.value +" win!"
         res = 2
    }
    if(computerchose === "scissors" && userchose === "rock"){
        newResult = username.value +" win!";
        res = 2
   }
   if(computerchose === "rock" && userchose === "paper"){
       newResult = username.value +" win!"
      res = 2
   }
   if(computerchose === "paper" && userchose === "rock"){
        newResult = username.value +" lose!"
        res = 1
    }
    if(computerchose === "scissors" && userchose === "paper"){
        newResult = username.value +" lose!"
        res = 1
    }

    console.log(res)

   

 
   if(res === 1){
    result.classList.remove('resuldraw')
    result.classList.remove('resultwin')
    result.classList.add('resultlose')

    allScore -= 5 
   }
   if(res === 2){
    result.classList.remove('resultlose')
    result.classList.remove('resuldraw')
    result.classList.add('resultwin')
    allScore += 5 
   }
   if(res === 0){
   
    result.classList.add('resultdraw')
    result.classList.remove('resultlose')
    result.classList.remove('resultwin')
    // allScore -= 1 
   }


   score.innerHTML = allScore
   result.innerHTML = newResult
}