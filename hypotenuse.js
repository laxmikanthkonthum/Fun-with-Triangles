const sideInput = document.querySelectorAll(".sideInput");
const submitBtn = document.getElementById("submitBtn");
const outputEl = document.getElementById("outputEl");
submitBtn.addEventListener('click',calculateHyp);
function calculateHyp(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
    //console.log(a,typeof a ,b,typeof b);
    //console.log(sideInput[0].value,sideInput[1].value)
        if(a == '0' || b == '0'){
            outputEl.innerText = "Please enter both the values";
            //console.log("In IF" , a,typeof a ,b,typeof b);
        }
        else{
            var hyp = Math.sqrt((a*a)+(b*b));
            console.log("IN Else", a,typeof a ,b,typeof b);
        }
        outputEl.innerText = "The Hypotenuse Value is: " + hyp;
}
