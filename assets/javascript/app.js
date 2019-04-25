// DOM Manipulation with the inner ID or class
var start = $("startingBtn")
var quiz = $('#quiz')
var paragraph = $('#text')
var title = $("h1")
var progress = $('#progress')



$('document').ready(function(){

// GLOBAL VARIABLES ===================================

// Time that will be set to the timer
var time = 15;
var timer;

// varibles for the progress that is going to be shown 
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswerdCount = 0;

// FUNCTION ===========================================

// This function will detect the value of the input type = radio
$(".monk").on('click', function () {
    checkValues();
    checkNotAnswered();

});

// This will grade the quiz
function checkValues() {
    var answer1 = $('input[name="Colombia"]:checked').val();
    var answer2 = $('input[name="United States"]:checked').val();
    var answer3 = $('input[name="Mexico"]:checked').val();
    var answer4 = $('input[name="Cuba"]:checked').val();
    var answer5 = $('input[name="Puerto Rico"]:checked').val();
    var answer6 = $('input[name="Dominican Republic"]:checked').val();

    correctAnswers = 0

    incorrectAnswers = 0

    
    //If correct then add one to the correct answer if not then add one to the incorrect
    if (answer1 === "Bogota") {
        correctAnswers += 1;
    }
    else{
        incorrectAnswers++
    }

    if (answer2 === "Washington DC") {
        correctAnswers += 1;
    }
    else{
        incorrectAnswers++
    }

    if (answer3 === "Mexico DF") {
        correctAnswers += 1;
    }
    else{
        incorrectAnswers++
    }

    if (answer4 === "Havana") {
        correctAnswers += 1;
    }
    else{
        incorrectAnswers++
    }

    if (answer5 === "San Juan") {
        correctAnswers += 1;
    }
    else{
        incorrectAnswers++
    }

    if (answer6 === "Santo Domingo") {
        correctAnswers += 1;
    }
    else{
        incorrectAnswers++
    }

    

    // console.log my variables
    console.log("You have " + correctAnswers + " correct")
    console.log("You have " + incorrectAnswers + " incorrect")
    console.log("You have " + unanswerdCount + " unanswered questions")
    
};

function checkNotAnswered (){
    
    unanswerdCount = 6

    let answer1 = $('input[name="Colombia"]:checked');
    let answer2 = $('input[name="United States"]:checked')
    let answer3 = $('input[name="Mexico"]:checked')
    let answer4 = $('input[name="Cuba"]:checked')
    let answer5 = $('input[name="Puerto Rico"]:checked')
    let answer6 = $('input[name="Santo Domingo"]:checked')

    if (answer1) {
        unanswerdCount --;
    }
    if (answer2) {
        unanswerdCount --;
    }
    if (answer3) {
        unanswerdCount --;
    }
    if (answer4) {
        unanswerdCount --;
    }
    if (answer5) {
        unanswerdCount --;
    }
    if (answer6) {
        unanswerdCount --;
    }
}

// hide this until the function is activated
quiz.hide()

// This will be hiden until the clock is done
progress.hide()


// Btn that will start this function 
$('.startingBtn').on('click', countDown)

    //This will activate the function that will check that awnsers
    checkValues()  

    // this function will make the question appear
    function popUp (){
        
        // update the css style
       $('.container-1').css("height", "137%"); 

        //display the questions
       quiz.show()

          
    }

    // This function will decrement the time by one each second 
    function countDown (){
        timer = setInterval(decrement, 1000) 

        // calling out the function that will display the questions
        popUp()
        
    }

    function decrement(){

        // This will count down by second with the setInterval
        time--;
        
    
        // Display the timer on the screen 
        $('#timer').html('<div>' + 'You have  (' + ':' + time + ')' + ' seconds' + ' left' + '</div>')

        // Hide this id when this function is activated
        $('button').hide()

        // Hide this id when this function is activated
        paragraph.hide()

        // Hide this when this funciton is activated
        title.hide()
        
        
        // When time is equal to zero is going to show and update context
        if(time === 0){

            // when this function is activated this css property will update
            $('.container-1').css("height", "60%");

            // append this to the DOM id for it to be displayed
            $('#correct').append(correctAnswers)

            $('#wrong').append(incorrectAnswers)

            $('#unanswered').append(unanswerdCount)
            
            //Display this when timer clock ups
            progress.show()

            //This will hide my questions
            quiz.hide()

            // stop the clock 
            clearInterval(time)
            
            

        }   
    }
});