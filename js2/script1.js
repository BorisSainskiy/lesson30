let div = document.body.querySelector("div");
let textArea = document.querySelector("textarea");
textArea.style.display = "none";
let b1 = false;
let b2 = false;
div.addEventListener("keydown", e => {
  if (e.key == "Control") {
    b1 = true;
  }
});

div.addEventListener("keydown", e => {
  if (b1 == true && e.key == "e") {
    textArea.style.display = "block";
    div.style.display = "none";
    textArea.innerText = div.innerText;
  }
});

textArea.addEventListener("keydown", e => {
  if (e.key == "Control") {
    b2 = true;
  }
});

textArea.addEventListener("keydown", e => {
  if (b2 == true && e.key == "a") {
    textArea.style.display = "none";
    div.style.display = "block";
    div.innerText = textArea.value;
  }
});
