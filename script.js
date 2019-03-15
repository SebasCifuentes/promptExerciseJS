//todo : all the code is private. Does not interfire with other code
//tocheck: how to make the code private  

// function constructor | question | possible answer | correct answer 


var gameQuestions, footballQuestion, jobQuestion, hobbieQuestion;



function Question (question, possibleAnswers, correctAnswer){

    this.question = question, 

    this.possibleAnswers = possibleAnswers, 

    this.correctAnswer = correctAnswer

}



footballQuestion = new Question("What is your football club?", { 1 :"Benfica", 2 : "Porto", 3: "Sporting"}, 1);

jobQuestion = new Question("What is your job?", { 1 :"Doctor", 2 : "Player", 3: "DJ"}, 2 );

hobbieQuestion = new Question("What is your hobbie?", { 1 :"VideoGame", 2 : "Sports", 3: "Tv"}, 2);



gameQuestions = { "1" : footballQuestion, "2" : jobQuestion, "3": hobbieQuestion};


// method in the console | random question | log to console  question itself and possible answer | writte a methdo 

Question.prototype.logInConsole = function(){

    var prompQuestion = this.question+ " ";

    for(let i = 1; i <= Object.keys(this.possibleAnswers).length; i++){

        prompQuestion += " " + i+ ". " + this.possibleAnswers[i] + " ";

    }

   return prompt(prompQuestion); 
}

// set the random question 

function randomQuestion(questions){

    var randomNumber = Math.floor(Math.random()*(Object.keys(questions).length)+1);

    var input = questions[randomNumber].logInConsole();

    var controlExit = false;

    if(input === "exit"){

        controlExit = true;

    }
     
    input = parseInt(input, 10);

    var rightAnswer = questions[randomNumber].correctAnswer;

    //pass parametros 
    rightAnswerVerification(rightAnswer, input);


    if(!controlExit){
        
        randomQuestion(questions);    

    }
}   


function rightAnswerVerification(rightAnswer, input){  


    if(input !== rightAnswer){

        console.log('not correct');

    }
    else { console.log('correct')}

}


randomQuestion(gameQuestions);
