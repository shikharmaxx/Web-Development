// // // TRAVESING THE DOM //

var itemList = document.querySelector("#items");
// // // parent node
// // console.log(itemList.parentNode);
// // //div is the parent node
// // itemList.parentNode.style.backgroundColor = "#f4f4";

// // console.log(itemList.parentNode.parentNode);
// // //container is the parent node

// //parent element is the same thing as parent node
// //they are interhcngabale
// console.log(itemList.parentElement);

//CHILD NODES
// console.log(itemList.childNodes);
// //we would see there is a text element in between the list items
// // well that is the line break or u can say white space
// //that is a pain in the ass
// //this returns a nodelist

// console.log(itemList.children);
// // this return only the child elements ie the li elemtns
// // this returns an html collection
// itemList.children[1].style.backgroundColor = "yellow";

// //first child
// console.log(itemList.firstChild);
// //this is also useless as it return the text node
// // instead of the list item

// //use first element child instead
// itemList.firstElementChild.textContent = "hello1";
// itemList.lastElementChild.textContent = "hello4";

//SIBLINGS

//nextSiblings

// console.log(itemList.nextSibling);
// //this also returns the text node
// //use nexxt element sibling instead

// console.log(itemList.nextElementSibling);
// //if there is no next siblings there is an error

// //previousSibling
// console.log(itemList.previousSibling);
// //this will return text nodes too use the below instead
// //prebiousElementSibling
// console.log(itemList.previousElementSibling);

// //Create a div
// var newDiv = document.createElement("div");

// //add class
// newDiv.className = "hello";

// //add id
// newDiv.id = "hello1";

// //add attr
// newDiv.setAttribute("title", "hello div");

// //create a text node
// var newDivText = document.createTextNode("Hello world");

// //add text to div
// newDiv.appendChild(newDivText);
// //right now it is just existing inside the JS not inside the actual DOM

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = "30px";

// console.log(newDiv);
