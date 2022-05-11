const alpha = 0.001;
let a = 0.1;
let b = 0.1;
let c = 0.1;

function func_y_hat(x) {
  let y_hat = 7 * x * x + 5 * x - 3;
  return y_hat;
}

function func_y(x) {
  let y = a * x * x + b * x - c;
  return y;
}

function func_error(y, y_hat) {
  let e = 0.5 * (y - y_hat) * (y - y_hat);
  return e;
}

function func_da(x, a, b, c){
  da = (func_y(x, a, b, c) - func_y_hat(x)) * x * x;
  return da;
};

function func_db(x, a, b, c){
  db = (func_y(x, a, b, c) - func_y_hat(x)) * x;
  return db;
};

function func_dc(x, a, b, c){
  dc = (func_y(x, a, b, c) - func_y_hat(x)) * -1;
  return dc
};

function rand_one() {
  let r = Math.random();
  return r;
}

function main() {
  let i = 0;
  let j = 0;
  let e_sum = 0.0;
  for (i = 0; i < 10000; i++) {
    x = Math.random() * 10 -5;
    let da= func_da(x, a, b, c);
    let db= func_db(x, a, b, c);
    let dc= func_dc(x, a, b, c);
    a -= alpha * da;
    b -= alpha * db;
    c -= alpha * dc;
    e_sum + func_error(func_y(x, a, b, c), func_y_hat(x));
  }
    let e_ave = e_sum / 10000;
    console.log(i, e_ave);
  console.log(a, b, c);
}

main();
