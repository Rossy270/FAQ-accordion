const PLUS_IMG = "assets/images/icon-plus.svg";
const MINUS_IMG = "assets/images/icon-minus.svg";

function showTextFAQS(element) {
  var img = element.querySelector(".card-title img");
  var p = element.querySelector("p");

  if (p.classList.contains("hider") == true) {
    removeHiderClass(p, img);
    applyeAllHiderClassAtLeastOne(element);
  } else {
    applyHiderClass(p, img);
  }
}

function applyHiderClass(element, img) {
  element.classList.add("hider");
  img.src = PLUS_IMG;
}

function removeHiderClass(element, img) {
  element.classList.remove("hider");
  img.src = MINUS_IMG;
}

function applyeAllHiderClassAtLeastOne(element) {
  var elements = document.getElementsByClassName("card-info");

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] != element) {
      var p = elements[i].querySelector("p");
      var img = elements[i].querySelector(".card-title img");
      if (p.classList.contains("hider") == false) {
        applyHiderClass(p, img);
      }
    }
  }
}
