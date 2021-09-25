const sideInput = document.querySelectorAll(".sideInput");
const submitBtn = document.querySelector(".submitBtn");
const outputEl = document.getElementById("outputEl");
submitBtn.addEventListener('click',calculateHyp);
function calculateHyp(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
        if(a == '0' || b == '0'){
            outputEl.innerText = "Please enter both the values";
        }
        else{
            var area = (0.5 * a * b );
            outputEl.innerText = "The area of the triangle is: " + area;
        }
}
