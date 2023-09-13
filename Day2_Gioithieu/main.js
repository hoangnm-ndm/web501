var myInfor = { name: "HoangNM", age: 32 };

var inforElement = document.getElementById("infor");

console.log(inforElement);

// var name = myInfor.name;
inforElement.innerHTML = `
  <h1>Tên: ${myInfor.name}</h1>
  <p>Tuổi: ${myInfor.age}</p>
`;
console.log(name);
var name = "Nguyen Hoang";
