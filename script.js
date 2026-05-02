var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popupbox.style.display = "block";
  popupoverlay.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
     
  event.preventDefault()
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  var h2 = document.createElement("h2");
  var h5 = document.createElement("h5");
  var p = document.createElement("p");
  var btn2 = document.createElement("button");
  btn2.textContent = "Delete";
  div.append(h2);
  div.append(h5);
  div.append(p);
  div.append(btn2);
  h2.textContent = booktitleinput.value;
  h5.textContent = bookauthorinput.value;
  p.textContent = bookdescriptioninput.value;
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";

  container.append(div);
  btn2.addEventListener("click", function () {
    div.remove();
    


  });
});