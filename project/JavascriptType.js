var Name = ["Настя","Оля","Ира","Саша","Катя","Наташа","Люда"];
var Age = [18, 15, 16, 17, 22, 23, 19];
var Happy = ["Yes","No"];
var i = 0;
var persone = {
    name: "No",
    age:"No",
    happy:"No"
};

while (i<=6) {
    persone.name = Name[Math.round(0 - 0.5 + Math.random() * (6 - 0 + 1))];
    persone.age = Age[Math.round(0 - 0.5 + Math.random() * (6 - 0 + 1))];
    persone.happy = Happy[Math.round(0 - 0.5 + Math.random() * (1 - 0 + 1))];

i++;
console.log("Person :" + i);

console.log(persone);

}