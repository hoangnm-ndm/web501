// Có 3 loại function: Exprestion function, Arrow function và Anonymous Functions
// Naming functions
function Sum(a, b) {
  return a + b;
}

// Anonymous functions
const car = {
  color: "red",
  brand: "toyota",
  run: function () {
    console.log("70km/h");
  },
};

// Arrows functions
const sum = (a, b) => {
  // block code
  return a + b;
};

// arrow function khi chỉ có 1 dòng lệnh
const sum2 = (a, b) => a + b;

const newInfor = (name, age) => {
  return { name: name, age: age };
};

const newInfor2 = (name, age) => ({ name: name, age: age });

// console.log(newInfor2("Hoang", 32));

// TODO: Viết 1 hàm arrow funtion nhập vào 2 số nguyên a, b.
/**
 * 1. Kiểm tra a, b có phải số nguyên hay không?
 * 2. Kiểm tra điều kiện a > b
 * 3. Tính tổng các số nguyên tố từ a đến b (tính cả a, b nếu chúng là số nguyên tố)
 */

// B1: Xây dựng 1 hàm kiểm tra các số nguyên tố từ 0 cho đến x
function laNguyenTo(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(laNguyenTo(12));

// B2: Viết hàm tính tổng các số từ b cho đến a (b > a)
const tongSoNguyenTo = (a, b) => {
  // Kiểm tra xem a, b có phải số nguyên không
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "a hoặc b đang không phải số nguyên";
  }

  // Kiểm tra xem a, b có phải số âm không
  if (a < 0 || b < 0) {
    return "a hoặc b đang nhỏ hơn 0";
  }

  // Kiểm tra xem a có lớn hơn b không
  if (a <= b) {
    return "a phải lớn hơn b";
  }

  let sum = 0;

  // Xây dựng vòng lặp chạy từ b cho đến a, nếu là số nguyên tố thì + vào sum
  for (let i = b; i <= a; i++) {
    if (laNguyenTo(i)) {
      sum += i;
    }
  }

  return sum;
};

console.log(tongSoNguyenTo(24, 11));
