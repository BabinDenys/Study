let circle = document.getElementById("clickMe"),
    text = document.getElementById("text"),
    field = document.getElementById("field"),
    start = document.getElementById("start"),
    myTimerStart = document.getElementById("myTimer"),
    answer = 0,
    records = document.getElementsByClassName("records"),
    names = document.getElementsByClassName("names"),
    proverka = true;

    console.log(records);
    console.log(names);
let i = 0;
field.addEventListener("click" , plus);
circle.addEventListener("click" , moveRandom);
start.addEventListener("click" , startGame);

function moveRandom() {
    circle.style.cx = (Math.round(50 - 0.5 + (Math.random())* (450-50))) ;
    circle.style.cy = (Math.round(50 - 0.5 + (Math.random())* (450-50))) ;
    i+=2;
    text.innerText = "Сумма очков : " + i;
}

function plus () {
    i--;
    text.innerText = "Сумма очков : " + i;
}

function startGame(){
    if (proverka) {
        i=0;
        text.innerText = "Сумма очков : " + i;
        document.getElementById("myTimer").innerHTML = 30;
        startTimer();
        proverka = false;
    }
    
}
function startTimer() {
    var myTimer = document.getElementById("myTimer");
    var time = myTimer.innerHTML;
    var s = +time;
    if (s!=0) {
        
        s--;
        if (s<10) {
            s = "0" + s;
        }
        document.getElementById("myTimer").innerHTML = s;
        setTimeout(startTimer, 1000);
    } else {
        answer = i;
        alert("Ващ счет : " + i);
        checkRecords(i);
        proverka = true;
        
    }
}

function checkRecords (index) {
    let numberPlace=0,name="";
    for (let i = 0; i <records.length;i++) {
        if(index<records[records.length - 1 - i].innerHTML) {
            break;
        } else {
            numberPlace = records.length - i;
        }
    }
    if (numberPlace != 0) {
        name = prompt("Поздравляем! Вы попали в топ! Введите ваше имя!");
        if(!name) {
            name = "Player" + index;
        }
    }
    for (let i = 0;i<records.length - numberPlace;i++) {
        names[records.length - 1 - i].innerHTML = names[records.length - 2 - i].innerHTML;
        records[records.length - 1 - i].innerHTML = records[records.length - 2 - i].innerHTML;
    }
    records[numberPlace-1].innerHTML = index;
    names[numberPlace-1].innerHTML = name;
    
}
