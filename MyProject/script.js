var numberOfCards, players;
function questions () {
    players = +prompt("Количество игроков");

    while ((typeof(players) == null || players == "" || isNaN(players) == true || players <= 1)) {
        players = +prompt("Количество игроков");
    }
    numberOfCards = +prompt("Введите количество карт");
    
    while ((typeof(numberOfCards) == null || numberOfCards == "" || isNaN(numberOfCards) == true) 
    || numberOfCards <= players) {
        numberOfCards = +prompt("Введите количество карт");
    }
    
}

questions();
var massCards = [];

function createmassOfCards () {
    massCards = [];
    numberLevelOfCards = +(((numberOfCards-1.1)/4).toFixed()); // 4 - это 4 масти карт 
    // Тут 1.1 - из-за того,что при случаях похожих на 3/2 округляло в большую сторону, что является ошибкой 
    
    for (let i = 0; i < numberLevelOfCards ; i++) {
        massCards[4*i] = i;
        massCards[4*i+1] = i;
        massCards[4*i+2] = i;
        massCards[4*i+3] = i;
       // console.log(numberLevelOfCards);
    }
    for (let i = 0; i < numberOfCards - numberLevelOfCards*4; i++) {
        massCards[numberLevelOfCards*4 +i] = numberLevelOfCards;
    }
}
// a%b !!


createmassOfCards(); // Отсортированый по порядку масссив ценности карт

console.log(massCards);

function newMass (arr,index1) {
    var leng = arr.length - 1;
    for (index1;index1 < leng; index1++ ) {
        arr[index1] = arr[index1+1];
    }
    arr.pop();
}

var massRandomCards = [];
var k;

function createRandomMassOfCards () {
    massRandomCards = [];
    for (let i = 0; i < numberOfCards; i++ ) {
    k = (Math.round(0 - 0.5 + (Math.random())*(numberOfCards - 1 - i - 0 + 1)));
    massRandomCards[i] = massCards[k];
    newMass(massCards,k); 
    //massCards.splice(k);
    }
}

createRandomMassOfCards();

console.log(massRandomCards);

// var massCardsToOnePlayer = [];

var objectPlayers = {};
var cardsToOnePlayer = ((numberOfCards-(numberOfCards%players)) / players);

function  giveCardsToPlayers () {
    
    objectPlayers = {};
    cardsToOnePlayer = ((numberOfCards-(numberOfCards%players)) / players);

    for ( let i = 0; i < players; i++) {
        objectPlayers[i] = [];
        for( let i2 = 0; i2 < cardsToOnePlayer; i2++) {
           
           objectPlayers[i].unshift(massRandomCards[0]) ;
           massRandomCards.shift();  
        }
   }
   console.log(objectPlayers);
}

giveCardsToPlayers();


var game = [];
var max, min;
var indexPlayer;
var newRound = cardsToOnePlayer;
// aaaaaa.forEach
 console.log("Лишние карты: " + (massRandomCards.length));


var PlayerToDelete, isNotLoser=0, length = [], index = 0,rounds = 0;

function  playOneRound () {
 for (let i = 0; i < newRound ; i++ ) {  // достаем карты из колоды для сравнения
    for ( let i2 = 0; i2 < players; i2++) {
        game.push(objectPlayers[i2][0]);
        objectPlayers[i2].shift(); // удаляем те карты, которые достали
     } 
     max = game[0];
     indexPlayer = 0;

     for (let i3 = 0; i3 < game.length; i3++) { //поиск большего элемента из тех , которые достались из колоды
         if (max < game[i3]){
             max = game[i3];
             indexPlayer = i3;
         }
     }

     for ( let i4 = 0; i4 < players ; i4++) { // добавляем карты победителю
         objectPlayers[indexPlayer].push(game[i4]);
     }

     console.log(game);
     game = [];
 
    }

    if (true) {
        for (let a = 0; a < players; a++) {
            length.push(objectPlayers[a].length); // создаем массив длины колоды карт игроков
        }

        min =length[0];
        for (let i3 = 0; i3 < length.length; i3++) { // Поиск игрока с найменшей колодой
            if (min > length[i3]){
                min = length[i3];
                index = i3 ;
                
            }
        }
        newRound = objectPlayers[index].length;
        console.log(newRound);
        if (newRound != 0) {
            isNotLoser = 0;
                length = [];

             if ( rounds < 25) { // Игра не превышает 25 раундов
                 rounds += 1;
                playOneRound();
            }
            else {
                forNewGame();
            }
        } else {
            forNewGame();
        }
    }
}
playOneRound();
function forNewGame () {
    players -= 1;
    console.log("Игрок " + (index + 1)  + " Проиграл! С " + newRound + " картами") ;
    // вывод порожения игрока
    delete objectPlayers[index];
    // удаляем проигравшего игрока
    if (players > 1 ) { // Запускаем угру заново для оставшихся игроков
        index = 0;
        rounds = 0;
        createmassOfCards();
        createRandomMassOfCards();
        giveCardsToPlayers();
        playOneRound();
    }
}

