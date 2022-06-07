function fibonacci(num) {
    let n1 = 0;
    let n2 = 1;
    let total;
    let text = "";
    let tong = 0;
    for (let i = 1; i <= num; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
        text += +n1 + "<br>";
        tong += n1;
    }
    console.log(tong);
}
fibonacci(10);
//# sourceMappingURL=main.js.map