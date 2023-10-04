// Khai báo hàm với default parammeters
function hello(name = "quý anh chị") {
  console.log(`Xin chào ${name}, rất vui được gặp bạn!`);
}

hello();

// IIFE: Là hàm được gọi ngay khi khai báo, không ảnh hưởng đến block code
(function hello() {
  console.log(`Xin chao ban!`);
})();

(function sum(a, b) {
  console.log(a + b);
})(2, 3);
