function fibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var total;
    var text = "";
    var tong = 0;
    for (var i = 1; i <= num; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
        text += +n1 + ";";
        tong += n1;
    }
    console.log(tong);
    console.log(text);
}
fibonacci(10);
// function fibonacci(num: number) {
//     let sum: number;
//     if (num == 0) return 0;
//     if (num == 1 || num == 2) return 1;
//     sum = fibonacci(num - 1) + fibonacci(num - 2);
//     return sum
//     console.log(sum);
// }
//
// fibonacci(10)
