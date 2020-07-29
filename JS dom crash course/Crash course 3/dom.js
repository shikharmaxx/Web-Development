// var button = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     console.log(123);
//   });

//another way to dot it

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClickFunction);

// function buttonClickFunction(e) {
//   //document.getElementById("header-title").textContent = "chnaged";
//   //document.querySelector("#main").style.backgroundColor = "#f4f4";

//   //   console.log(e.target);
//   //   //this will return a lot of properties in the console
//   //   console.log(e.target.id);
//   //   //returns the id
//   //   console.log(e.target.className);
//   //   //returnt the calss name
//   //   console.log(e.target.classList);
//   //   //returns a token list of the button

//   //   var output = document.getElementById("output");
//   //   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   //   //this way we can show the event output on the screen

//   //   console.log(e.type);
//   //   //tells us what type of event it is example: outpts click

//   //   //   console.log(e.clientX);
//   //   //   console.log(e.clientY);
//   //   //this tells the mouse position in the browser window

//   //   console.log(e.offsetX);
//   //   console.log(e.offsetY);
//   //   // this is from the refernce of the element

//   console.log(e.altKey);
//   // return true if u click and are holding thr alt keyu
//   //false if u r not holding the alt key
//   //same cane be done for shiftkey and ctrl key

// }

var button = document.getElementById("button");

// button.addEventListener("click", runEvent);

//button.addEventListener("dblclick", runEvent);
//this runs event for a double click

button.addEventListener("mousedown", runEvent);
//this is same as click but it doesnot wait for mouse release
//as soon as u put click it goes off
//"mouseup" it is the opposite of mouse down
// when u lift up the clikc then it goes off

function runEvent(e) {
  console.log("EVENT TYPE : " + e.type);
  //we get the event type

  //for mouse move cooridinats capture
  // output.innerHTML =
  //   "<h3> MouseX:" + e.offsetX + "</h3><h3>MOuseY:" + e.offsetY + "</h3>";

  // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
  // the color will change accordin to the offset

  //to catch in console what we are typing
  // console.log(e.target.value);
  // document.getElementById("output").innerHTML =
  //   "<h3>" + e.target.value + "</h3>";
}

// var box = document.getElementById("box");

// // box.addEventListener("mouseenter", runEvent);
// // //as soon as mouse enters the area it fires off
// // //same we can use mouseleave

// // box.addEventListener("mouseover", runEvent);
// // // over works for every element inside the parent
// // // but the enter only works for one time

// box.addEventListener("mousemove", runEvent);
// will continously go off whenever we move our mouse inside

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");

//itemInput.addEventListener("keydown", runEvent);
// each time we press a key the event will fire off

//itemInput.addEventListener("keyup", runEvent);
// will fire off when we lift out finger up from the key

//itemInput.addEventListener("keypress", runEvent);
// works when u touch and press the key

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// focus means when we mouse clicked inside the area
// blur means when we click off to some outside area

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// // fires of when we cut or paste something

// itemInput.addEventListener("input", runEvent);
// // we type we cut we paste , it fires off

// var select = document.querySelector("select");

// select.addEventListener("change", runEvent);
// // anytime a chnge occurs it fires off

form.addEventListener("submit", runEvent);
// when we click it just blinks and goes away in console
// to prevent this we use
// preventDeafualt();
