alert(1);
console.log(LeftBorderWidth); // undefined - из-за того, что вызов переменной перед присвоением значения
var LeftBorderWidth = 1;
console.log(LeftBorderWidth); // Все работает нормально и выводит значение переменной

//console.log(second); // Переменная еще не существует

let second = 2; // Создается только тогда, когда код до нее ддоходит 
                // Такое понятие называется Хостинг или Всплытие переменной     

console.log(second); // Все работает


{
let third = 3;
console.log(third); // Сработает

}
//console.log(third); // Ошибка !! переменная let работает только в фигурных скобках, которых обьявлена




const pi = 3; // Похожеена let, но выдает ошибку при попытке изменить переменную
console.log(pi+1);



