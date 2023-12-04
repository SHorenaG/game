let z = document.querySelectorAll(".z");
let mybt = document.querySelector(".btn");
let myb = document.querySelector(".bt");
let myh1 = document.querySelector(".h");
let x=0;
let o=0
let count = 2;

for (let i = 0; i < z.length; i++) {
    z[i].addEventListener("click", function () {
        if (count % 2 === 0) {
            z[i].innerText = "x";
            z[i].style.color = "#6995F5";
            z[i].style.pointerEvents = "none";
        } else {
            z[i].innerText = "0";
            z[i].style.color = "#C569F5";
            z[i].style.pointerEvents = "none";
        }

        if (z[0].innerText == "x" && z[1].innerText == "x" && z[2].innerText == "x" ||
            z[3].innerText == "x" && z[4].innerText == "x" && z[5].innerText == "x" ||
            z[6].innerText == "x" && z[7].innerText == "x" && z[8].innerText == "x" ||
            z[0].innerText == "x" && z[3].innerText == "x" && z[6].innerText == "x" ||
            z[1].innerText == "x" && z[4].innerText == "x" && z[7].innerText == "x" ||
            z[2].innerText == "x" && z[5].innerText == "x" && z[8].innerText == "x" ||
            z[0].innerText == "x" && z[4].innerText == "x" && z[8].innerText == "x" ||
            z[2].innerText == "x" && z[4].innerText == "x" && z[6].innerText == "x") {
                x++
                myh1.innerText=`Player X Win! X:${x} | O:${o}`
                for (let c = 0; c < z.length; c++) {
                    z[c].style.pointerEvents="none"
                   
                    
                }
            

        } else if (z[0].innerText == "0" && z[1].innerText == "0" && z[2].innerText == "0" ||
            z[3].innerText == "0" && z[4].innerText == "0" && z[5].innerText == "0" ||
            z[6].innerText == "0" && z[7].innerText == "0" && z[8].innerText == "0" ||
            z[0].innerText == "0" && z[3].innerText == "0" && z[6].innerText == "0" ||
            z[1].innerText == "0" && z[4].innerText == "0" && z[7].innerText == "0" ||
            z[2].innerText == "0" && z[5].innerText == "0" && z[8].innerText == "0" ||
            z[0].innerText == "0" && z[4].innerText == "0" && z[8].innerText == "0" ||
            z[2].innerText == "0" && z[4].innerText == "0" && z[6].innerText == "0") {
                o++
           myh1.innerText=`Player O Win! X:${x} | O:${o}`
           for (let c = 0; c < z.length; c++) {
            z[c].style.pointerEvents="none"
           
            
        }
            



        } else if (z[0].innerText !== "" && z[1].innerText !== "" && z[2].innerText !== "" &&
            z[3].innerText !== "" && z[4].innerText !== "" && z[5].innerText !== "" &&
            z[6].innerText !== "" && z[7].innerText !== "" && z[8].innerText !== "") {
            myh1.innerText=`draw  X:${x} | O:${o}`
            for (let c = 0; c < z.length; c++) {
                z[c].style.pointerEvents="none"
               
                
            }
        }
        count++;
    });
}

mybt.addEventListener("click", function () {
    for (let i = 0; i < z.length; i++) {
        z[i].innerText = "";
        z[i].style.color = "";
        z[i].style.pointerEvents = "auto";
        count = 2;
    }
});
myb.addEventListener("click", function () {
    for (let i = 0; i < z.length; i++) {
        z[i].innerText = "";
        z[i].style.color = "";
        z[i].style.pointerEvents = "auto";
        myh1.innerText=` X:${x} | O:${o}`
        count = 2;
        x=0
        o=0
    }
});
