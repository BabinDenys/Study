let headRect = document.getElementById("headRect"),
    cssRect = window.getComputedStyle(headRect),
    food = document.getElementById("food"),
    cssFood = window.getComputedStyle(food),
    numberOfWall = 0,
    wall = document.getElementById("wall"),
    svg = document.getElementsByTagName("svg")[0],
    records = document.getElementsByClassName("record"),
    names = document.getElementsByClassName("names");

var LeRi = parseInt(cssRect.x);
var UpDo = parseInt(cssRect.y);
var LeRiFood = parseInt(cssFood.x);
var UpDoFood = parseInt(cssFood.y);
var left,right,up,down;
var arr = [];
var checkLosePoint = 0;

addEventListener("keydown" , moveHeadRect);
   


function moveHeadRect(k) {
    toEatFood();
    checkLose();
    
    
    switch(k.keyCode) {
        case 37: 
            headRect.style.x = LeRi -= 10;
            clearTimeout(right);
            clearTimeout(up);
            clearTimeout(down);
            clearTimeout(left);
            left = setTimeout(moveHeadRect,100,k); 
        break;

        case 38: 
            headRect.style.y = UpDo -= 10;
            clearTimeout(right);
            clearTimeout(left);
            clearTimeout(down);
            clearTimeout(up);
            up = setTimeout(moveHeadRect,100,k);
        break;

        case 39: 
            headRect.style.x = LeRi += 10;
            clearTimeout(left);
            clearTimeout(up);
            clearTimeout(down);
            clearTimeout(right);
            right = setTimeout(moveHeadRect,100,k);
        break;

        case 40: 
            headRect.style.y = UpDo += 10;
            clearTimeout(right);
            clearTimeout(up);
            clearTimeout(left);
            clearTimeout(down);
            down = setTimeout(moveHeadRect,100,k);
        break;
    }
    
    
}
function createWall() {
    arr[numberOfWall] = document.createElementNS("http://www.w3.org/2000/svg","rect");
    arr[numberOfWall].setAttribute("x" , LeRiFood);
    arr[numberOfWall].setAttribute("y" , UpDoFood);
    arr[numberOfWall].setAttribute("width" , "10px");
    arr[numberOfWall].setAttribute("height" , "10px");
    arr[numberOfWall].setAttribute("fill" , "gray");
    arr[numberOfWall].setAttribute("class", "loseBlock");


    svg.appendChild(arr[numberOfWall]);
    numberOfWall++;
    doRainbow();
}

function createFood() {
    var rainbow = ["red","orange","yellow","green","blue","darkblue","violet"];
    
         
    food.style.fill = rainbow[(Math.round(0 - 0.5 + (Math.random())* (6-0)))];
    food.style.x = LeRiFood = (Math.round(0 - 0.5 + (Math.random())* (80-0))) * 10;
    food.style.y = UpDoFood = (Math.round(0 - 0.5 + (Math.random())* (60-0))) * 10;
}


function toEatFood() {
    if (LeRi == LeRiFood && UpDo == UpDoFood) {
        createWall();
        createFood();
    }
}


function checkLose() {
    if (LeRi < 0 || LeRi > 790 || UpDo < 0 || UpDo > 590) {
        alert("Вы проиграли! Ваш результат : " + arr.length);
        checkRecords(+arr.length);
        restart();
        
    }
        
    
    for (let i = 0 ; i< arr.length; i++) {
        
        if (LeRi == parseInt(window.getComputedStyle(arr[i]).x)  && UpDo == parseInt(window.getComputedStyle(arr[i]).y)){ 
            checkLosePoint++;
            if (checkLosePoint >arr.length) {
                alert("Вы проиграли! Ваш результат : " + arr.length);
                checkRecords(+arr.length);
                restart();     
            }
            
            
        }
    }
}


function restart () {
    headRect.style.x = 250;
    headRect.style.y = 250;
    food.style.x = 400;
    food.style.y = 40;
    LeRi = parseInt(cssRect.x);
    UpDo = parseInt(cssRect.y);
    LeRiFood = parseInt(cssFood.x);
    UpDoFood = parseInt(cssFood.y);
    arr = [];
    checkLosePoint = 0;
    numberOfWall = 0;
    
    elements = document.getElementsByClassName("loseBlock");
    while (elements.length > 0) elements[0].remove();
    // document.getElementsByClassName("loseBlock").removeChild();
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

function doRainbow() {
    var rainbow = ["red","orange","yellow","green","blue","darkblue","violet"];
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.fill = rainbow[(Math.round(0 - 0.5 + (Math.random())* (6-0)))];
    }
}