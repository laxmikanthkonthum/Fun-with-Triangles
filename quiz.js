const quizform = document.getElementById('quiz');
const submitBtn = document.querySelector('.submitBtn');
const outputEl = document.querySelector(".outputEl")
submitBtn.addEventListener('click',getValues);
correctAnswers = ["Obtuse","True"];
function getValues(){
    var score = 0;
    var i = 0;
    const formResults = new FormData(quizform);
    for (var value of formResults.values()){
    if (value === correctAnswers[i]){
        score = score + 1;
    }
    i = i+1;
    outputEl.innerText = "Your score is " + score + "!";
}
}
