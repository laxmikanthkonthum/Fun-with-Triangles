const sideInput = document.querySelectorAll(".sideInput");
const submitBtn = document.querySelector(".submitBtn");
const outputEl = document.querySelector(".outputEl");
submitBtn.addEventListener('click',calculateHyp);
function calculateHyp(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
        if(a == '0' || b == '0'){
            outputEl.innerText = "Please enter both the values";
        }
        else{
            var hyp = Math.sqrt((a*a)+(b*b));
            outputEl.innerText = "The Hypotenuse Value is: " + hyp;
        }
}
