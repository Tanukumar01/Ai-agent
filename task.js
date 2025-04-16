const n = 99;
let fib = [0, 1, 1];
for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    if (fib[i] <= n) {
        console.log(fib[i]);
    } else {
        break;
    }
}