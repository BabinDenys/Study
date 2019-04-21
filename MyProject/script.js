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

createmassOfCards(); // Отсортированый по порядку масссив ценности карт

console.log(massCards);

function newMass (arr,index) {
    var leng = arr.length - 1;
    for (index;index < leng; index++ ) {
        arr[index] = arr[index+1];
    }
    arr.pop();
}

var massRandomCards = [];
let k;

function createRandomMassOfCards () {
    for (let i = 0; i < numberOfCards; i++ ) {
    k = (Math.round(0 - 0.5 + (Math.random())*(numberOfCards - 1 - i - 0 + 1)));
    massRandomCards[i] = massCards[k];
    newMass(massCards,k); 
    //massCards.splice(k);
    }
}

createRandomMassOfCards();

console.log(massRandomCards);
var arr = [[],[],[]];
var objectPlayers = {};
var cardsToOnePlayer = ((numberOfCards-(numberOfCards%players)) / players);

// for ( let i = 0; i < players; i++) {
//     objectPlayers[i] = arr;
//      for( let i2 = 0; i2 < cardsToOnePlayer; i2++) {
//         console.log(objectPlayers);
//         objectPlayers[i][i2] = massRandomCards[0];
//         massRandomCards.shift();
        
//         console.log(massRandomCards);
        
//      }
     
// }
// console.log("Лишние карты: " + (massRandomCards.length));
// console.log(objectPlayers);

// objectPlayers[er][0] = 3;
// console.log(objectPlayers[er]);
for ( let i = 0; i < players; i++) {
    arr[i][0] = '1';
    console.log(arr[i][0]);
    console.log(arr);
    //  for( let i2 = 0; i2 < cardsToOnePlayer; i2++) {
        
    //     arr[i][i2] = massRandomCards[0];
        
    //     massRandomCards.shift();
        
        
        
        
   //  }
}
