let operA = '';
let operB = '';
let operO = '';
let finish = false;

const numsArr = ["0","1","2","3","4","5","6","7","8","9","."];
const ordersArr = ["+","-","*","/","%"];

const out = document.querySelector('.calcFace p');

function clearAll(){
    operA = '';
    operB = '';
    operO = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector(".clear").onclick = clearAll;

document.querySelector(".buttons").onclick = (elem) => {
    if(!elem.target.classList.contains("btn")) return;
    if(elem.target.classList.contains("clear")) return;

    out.textContent = '';
    const key = elem.target.textContent;
    
    if(numsArr.includes(key)){
        if(operB === '' && operO === ''){
            operA += key;
            out.textContent = operA;
        } else if(operA !== '' && operB !== '' && finish){
            operB = key;
            finish = false;
            out.textContent = operB;
        } else {
            operB += key;
            out.textContent = operB;
        }
        console.log(operA,operB,operO);
        return;
    }

    if(ordersArr.includes(key)){
        operO = key;
        out.textContent = operO;
        console.log(operA,operB,operO);
        return;
    }

    if(key === "="){
        if(operB === '') operB = operA;
        switch(operO){
            case "+":
                operA = (+operA) + (+operB);
                break;
            case "-":
                operA = (+operA) - (+operB);
                break;
            case "*":
                operA = (+operA) * (+operB);
                break;
            case "/":
                if(operB === '0'){
                    out.textContent = "Thats not true!";
                    operA = '';
                    operB = '';
                    operO = '';
                    return;
                }
                operA = (+operA) / (+operB);
                break;
            case "%":
                operA = (+operA) % (+operB);
                break;
        }
        finish = true;
        out.textContent = operA;
        console.log(operA,operB,operO);
    }
}