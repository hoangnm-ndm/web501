function hello() {
  console.log("hello");
}

const clickMeElement = document.getElementById("clickMe");

clickMeElement.addEventListener("click", hello);

setTimeout(() => {
  setTimeout(() => {
    console.log("hi");
  }, 3000);
}, 3000);

function func2() {
  return;
}
async function func1() {
  // setTimeout(() => func2(), 3000);
  const resFunc2 = func2();
  const resFunc3 = resFunc2.toString();
}
