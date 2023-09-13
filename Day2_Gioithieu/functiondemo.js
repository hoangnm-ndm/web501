// naming function
function sum(a, b) {
  return a + b;
}

// anonymous function
var welcome = function (value = "Xin chao ban!", gioitinh) {
  if (gioitinh === "nam") {
    console.log("xin chao quy ong!");
  }
  if (gioitinh === "nu") {
    console.log("xin chao quy ba!");
  }
  console.log(value);
};

// arrow functions
const clickMe = () => {
  console.log("Ban vua bam nut phai khong?");
};
