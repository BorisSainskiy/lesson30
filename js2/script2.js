let title1 = document.body.querySelector("#title1");
let title2 = document.body.querySelector("#title2");

title1.addEventListener("click", e => {
  let arr = document.body.querySelectorAll("tr");
  let arrOfNumber = [];
  for (let i = 1; i < arr.length; i++) {
    let td = arr[i].querySelector("td");
    arrOfNumber.push(td.innerText);
  }
  arrOfNumber.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i < arr.length; i++) {
    let td = arr[i].querySelector("td");
    td.innerText = arrOfNumber[i - 1];
  }
});

title2.addEventListener("click", e => {
  let arr = document.body.querySelectorAll("tr");
  let arrOfString = [];
  for (let i = 1; i < arr.length; i++) {
    let arrTd = arr[i].querySelectorAll("td");
    let td = arrTd[1];
    arrOfString.push(td.innerText);
  }
  arrOfString.sort();
  for (let i = 1; i < arr.length; i++) {
    let arrTd = arr[i].querySelectorAll("td");
    let td = arrTd[1];
    td.innerText = arrOfString[i - 1];
  }
});
