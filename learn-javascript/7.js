var str = prompt("Введите строку");
var lastSymbol = str[str.length - 1];

if (lastSymbol === "!") {
console.log(str.substring(0,str.length - 1));
}

else {
console.log(str.substring(0,str.length));
}