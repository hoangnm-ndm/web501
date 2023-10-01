var myInfor = { name: "Tèo", age: 31 };
var ten = myInfor.name;
var tuoi = myInfor.age;

var { name: ten, age: tuoi } = myInfor;

var myCars = ["Lam bô gi ni", "mẹc", "tô ziu ta"];
var [xe1, xe2, xe3, xe4] = myCars;
// console.log(xe1, xe2, xe3, xe4);

// console.log(myCars[4]);

// var danhSachLop = ["Hoang", "Chuc"];
// var tmp1 = danhSachLop[0];
// var tmp2 = danhSachLop[1];
// danhSachLop = [tmp2, tmp1]
// var [a, b] = danhSachLop;
// [a, b] = [b, a];
// console.log(a, b);

console.log(1, 2, 3, 4, [5, 6, 7, 8], { name: "Hoang" });

function myConsole(...args) {
  console.log(args.length);
  console.log(args);
}
myConsole();
/** Rest Operator dùng như 1 cách truyền nhiều tham số vào 1 hàm. */

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr = [...arr1, ...arr2]; // [1,2,3,4,5,6]
// console.log(arr);

var newArr = [...arr1];
newArr.push("hello");
// console.log(newArr);
// console.log(arr1);
var [a, ...b] = arr1;
// var [...a, b] = arr1; //wrong
/**
 * Spread phải khai báo ở tham số cuối cùng khi gán cho biến mới.
 */
console.log({ a, b });
let studentInfor = {
  name: "Student A",
  PHP: 5,
  JS: 2,
  HTML: 10,
};

// studentInfor.JS = 10;
studentInfor = {
  ...studentInfor,
  // đây là cách dùng toán tử rest, "..." nên được khai báo đầu tiên như một arguments, để các khai báo khác có thể ghi đè.
  PHP: 10,
  JS: 8,
};
console.log(studentInfor);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };
const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }

const datas = {
  name: "Chien tranh giua cac vi sao",
  rate: 4.5,
  views: 5000,
  price: 100,
  desc: "abc...",
  author: "teo",
};

const [name, rate, ...rest] = datas;
