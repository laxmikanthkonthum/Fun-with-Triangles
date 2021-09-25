const angleInput = document.querySelectorAll(".angleInput");
const submit = document.querySelector(".submit");
const outputEl = document.querySelector(".output");
submit.addEventListener('click',checkValues);
function checkValues(){
    var sum = 0;
    for(var i =0 ;i <3; i++){
       sum = sum + Number(angleInput[i].value);
    }
    if ( sum === 180){
        outputEl.innerText = "Yayy! Its a triangle";
    }
    else{
        outputEl.innerText = "They dont form a triangle";
    }
}
