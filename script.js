//todo : insert prompt method 

// function constructor | question | possible answer | correct answer 


var gameQuestions, footballQuestion, jobQuestion, hobbieQuestion;



function Question (question, possibleAnswers, correctAnswer){

    this.question = question, 

    this.possibleAnswers = possibleAnswers, 

    this.correctAnswer = correctAnswer

}



footballQuestion = new Question("What is your football club?", { 1 :"Benfica", 2 : "Porto", 3: "Sporting"}, 1);

console.log(footballQuestion);

jobQuestion = new Question("What is your job?", { 1 :"Doctor", 2 : "Player", 3: "DJ"}, 2 );

hobbieQuestion = new Question("What is your hobbie?", { 1 :"VideoGame", 2 : "Sports", 3: "Tv"}, 2);



gameQuestions = { "1" : footballQuestion, "2" : jobQuestion, "3": hobbieQuestion};


// method in the console | random question | log to console  question itself and possible answer | writte a methdo 

Question.prototype.logInConsole = function(){

    var prompQuestion = this.question+ " ";

    for(let i = 1; i <= Object.keys(this.possibleAnswers).length; i++){

        prompQuestion += " " + i+ ". " + this.possibleAnswers[i] + " ";

    }

    prompt(prompQuestion); 

}

// set the random question 

function randomQuestion(questions){

    var randomNumber = Math.floor(Math.random()*(Object.keys(questions).length)+1);

    console.log(randomNumber);

    questions[randomNumber].logInConsole();


}

randomQuestion(gameQuestions);  


// function to calculate if the answer is correct 
