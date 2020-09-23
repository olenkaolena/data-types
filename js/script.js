//2.
let uahs = prompt("How much money do you have?");
let usd = 27.93;
let uansInUsd = uahs / usd;

if (uahs == "" || uahs == undefined) {
  alert("Write a number");
} else {
  alert(uansInUsd + "USD");
}

let eur = 32.97;
let uansInEur = uahs / eur;
if (uahs == "" || uahs == undefined) {
  alert("Write a number");
} else {
  alert(uansInEur + "EUR");
}

//3.
let amount = +prompt("What is the amount of your order?");
let sale1 = (amount - 0.01 * amount);
let sale2 = (amount - 0.05 * amount);
let sale3 = (amount - 0.1 * amount);

if (amount <=500) {
  alert("You got a dicount of 1% so you have to pay only ${sale1}");
} else if (amount > 500 && amount <=1000) {
  alert("You got a dicount of 5% so you have to pay only ${sale2}");
} else if (amount > 1000) {
  alert("You got a dicount of 10% so you have to pay only ${sale3}, and we also offer to you a gift card for 200 UAH");
};

//4.
let firstQ = prompt("Which country capital is Minsk?");
let firstA = Belarus;
if (firstQ  === firstA) {
  alert("You got 1 point!");
} else {
  alert("Sorry, it's a wrong answer");
};

let secondQ = prompt("Which city is the capital of Belgium?");
let secondA = Brussels;
if (secondQ  === secondA) {
  alert("You got 1 point!");
} else {
  alert("Sorry, it's a wrong answer");
};

let thirdQ = prompt("What is the capital of Morocco?");
let thirdA = Rabat;
if (thirdQ  === thirdA) {
  alert("You got 1 point!");
} else {
  alert("Sorry, it's a wrong answer");
};

let fourthQ = prompt("Which country capital is Vatican City?");
let fourthA = "Vatican City State";
if (fourthQ  === fourthA) {
  alert("You got 1 point!");
} else {
  alert("Sorry, it's a wrong answer");
};

let fifthQ = prompt("What is the capital of France?");
let fifthA = Paris;
if (fifthQ  === fifthA) {
  alert("You got 1 point!");
} else {
  alert("Sorry, it's a wrong answer");
};

if (firstQ  === firstA && secondQ  === secondA && thirdQ  === thirdA && fourthQ  === fourthA && fifthQ  === fifthA) {
  alert("Congrats! You got one additional point!");
} else {
  alert("Travel more, you need it!");
};

//5.
let number = prompt("Give me a number bigger than 100");
let arrayNum = number.split('');
let number1 = arrayNum [0];
let number2 = arrayNum [1];
let number3 = arrayNum [2];

if (number1 == number2 || number2 == number3 || number1 == number3) {
  alert("There is a redundunt number");
} else {
  alert("All numbers are different");
};

//6.
let value = prompt("Push a button from 1 to = on your keyboard");

if (value == 1) {
  alert('');
} else if (value == 2) {
  alert('"');
} else if (value == 3) {
  alert('№');
} else if (value == 4) {
  alert('%');
} else if (value == 5) {
  alert(':');
} else if (value == 6) {
  alert(',');
} else if (value == 7) {
  alert('.');
} else if (value == 8) {
  alert(';');
} else if (value == 9) {
  alert('(');
} else if (value == 0) {
  alert(')');
} else if (value == '-') {
  alert('_');
} else if (value == '=') {
  alert('+');
} else {
  alert('Change your keyboard!');
};