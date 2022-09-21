var sumFibonacci = 0;
var myArray = [0];
function fibonacci(x) {
    if (x == 1 || x == 2) {
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}
for (var i = 1; i <= 20; i++) {
    myArray.push(fibonacci(i));
    sumFibonacci += fibonacci(i);
}
console.log("Dãy số Fibonacci trong khoảng từ 0 đến 20 là: " + myArray.toString());
console.log("Tổng số Fibonacci của dãy số là: " + sumFibonacci);
