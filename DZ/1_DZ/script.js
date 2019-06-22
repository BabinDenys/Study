var money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}
start();


var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: true,
    choseExpenses: function () {
        for (let i = 0; i<2; i++) {
            var a1 =  prompt("Введите обязательную статью расходов в этом месяце","");
            var a2 =  prompt("Во сколько обойдется?","");
    
            if ((typeof(a1)) === "string" && a1 != "" && a1.length < 50 &&
                a2 != "" && typeof(a1) != null && typeof(a2) != null  ) {    
                    appData.expenses[a1] = a2;
            } else{
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget/30).toFixed();    
        alert( "Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay <= 100) {
            console.log("Прожиточный минимум");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");   
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let  save = +prompt("Какова сумма накоплений?","");
            let  percent = +prompt("Под какой процент?","");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for ( let i = 0; i < 3; i++) {
            let optExp = prompt("Статья необязательных расходов?","");
            if ( (typeof(optExp)) != null && (typeof(optExp)) == "string" && 
                optExp != "" && optExp.length< 50) {
                appData.optionalExpenses[i+1] = optExp;
            } else {
                i--;
            } 
        } 
    },
    chooseIncome:function () {
        let items = prompt("Что принесет дополнительный доход (Перечислите через запятую)","");
        appData.income = items.split(",");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();

        let str = "Способы доп. заработка: ";

        if (items == null || items == ""){
            appData.chooseIncome();
        }

        appData.income.forEach(function (item,id) {
            str += (id+1) + ". " + item + "  ";
            
            
        });
        alert (str); 
    }

};

for ( let keys in appData) {
    console.log("Свойство: " + keys + " имеет значение " + appData[keys + ":"]);
}



















// while (i<2) {
//     i++;
//     var a1 =  prompt("Введите обязательную статью расходов в этом месяце");
//     var a2 =  prompt("Во сколько обойдется?");
//     if ((typeof(a1)) === "string" && a1 != "" && a1.length < 50 &&
//         a2 != "" && typeof(a1) != null && typeof(a2) != null  ) {

//             appData.expenses[a1] = a2;
//     } else{
//         i--;
//     }
// }


//  let i = 0;
// do {
//     i++;
//     var a1 =  prompt("Введите обязательную статью расходов в этом месяце");
//     var a2 =  prompt("Во сколько обойдется?");
//     if ((typeof(a1)) === "string" && a1 != "" && a1.length < 50 &&
//         a2 != "" && typeof(a1) != null && typeof(a2) != null  ) {

//             appData.expenses[a1] = a2;
//     } else{
//         i--;
//     }

// } while(i<2);