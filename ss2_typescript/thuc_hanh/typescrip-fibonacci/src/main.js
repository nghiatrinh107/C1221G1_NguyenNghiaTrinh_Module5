// function fibonacci(num:number): void {
//     let n1: number = 0;
//     let n2: number = 1;
//     let temp: number;
//     let text: string = "";
//     let tong: number = 0;
//     for (let i = 1; i <= num; i++) {
//         temp = n1 + n2;
//         n1 = n2;
//         n2 = temp;
//         text += + n1 + "\n";
//         tong += n1;
//     }
//
//     console.log(tong);
//     console.log(text);
// }
function fibonacci(num) {
    if (num == 0)
        return 0;
    if (num == 1 || num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
function main(num) {
    for (var i = 0; i < num; i++) {
        console.log(fibonacci(i));
    }
}
main(10);
