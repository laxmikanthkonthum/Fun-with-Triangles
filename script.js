const angleInput = document.querySelectorAll(".angleInput");
const submit = document.querySelector(".submitBtn");
const outputEl = document.querySelector(".outputEl");
submit.addEventListener('click',checkValues);
function checkValues(){
    if(Number(angleInput[0].value < 1) || Number(angleInput[1].value < 1) || Number(angleInput[2].value < 1 ))
    {
        outputEl.innerText = "Please enter values greater than 0 🙄"; 
    }
    else{
    var sum = 0;
    for(var i =0 ;i <3; i++){
        
        
            sum = sum + Number(angleInput[i].value);
            }
            if ( sum === 180){
                outputEl.innerText = "Yayy! Its a triangle 😁";
            }
            else {
                outputEl.innerText = "They dont form a triangle 😅";
            }
        }
}
