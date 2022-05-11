const alpha = 0.001;
let a = 0;
let b = 0;

function func_y_hat(x) {
    let y_hat = 5.0 * x - 3.0;
    return y_hat;
}

function func_y(x) {
    let y = a * x + b;
    return y;
}

function func_error(y, y_hat) {
    let e = 0.5 * (y - y_hat) * (y - y_hat);
    return e;
}

function func_da(x) {
    let y = func_y(x);
    let y_hat = func_y_hat(x);
    let da = (y - y_hat) * x;
    return da;
}

function func_db(x) {
    let y = func_y(x);
    let y_hat = func_y_hat(x);
    let db = (y - y_hat) * 1;
    return db;
}

function rand_one() {
    let r = Math.random();
    return r;
}

function main() {
    let i = 0;
    let j = 0;

    for (i = 0; i < 500; i++) {
        let e_sum = 0.0;
        for (j = 0; j < 100; j++) {
            let x = rand_one() * 100 - 50;
            a -= alpha * func_da(x);
            b -= alpha * func_db(x);
            e_sum += func_error(func_y(x), func_y_hat(x));
        }
        let e_ave = e_sum / 100;
        console.log(i, e_ave);
    }
    console.log(a, b);
}

main();
