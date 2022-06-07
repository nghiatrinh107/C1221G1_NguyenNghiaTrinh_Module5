function fibonacci(num:number) {
    let n1: number = 0;
    let n2: number = 1;
    let total: number;
    let text: string = "";
    let tong: number = 0;
    for (let i = 1; i <= num; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
        text += + n1 + ";";
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
