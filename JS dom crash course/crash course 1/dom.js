//alert(1);

//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
// this produces a list of all the properties in the javascript console

// console.log(document.domain);
// // gives the local host address

// console.log(document.URL);

// console.log(document.title);
// // returnt he title "item lister"

// //we can change the title from JS
// //document.title = "Item lister NEW";

// console.log(document.body);
// //gives the body

// console.log(document.all);
// // this returns all documnet as an array

// //lets say we want to access the header
// //in the console we can see the index of the header
// // in the document.all
// // it is actually 10

// //console.log(document.all[10]);
// //returnt the header in the console

// //document.all[10].textContent = "hello bruh";
// // but we dont want to use this method as if we add new items
// // the index will change hence we wont have desired results

// console.log(document.forms);

// console.log(document.links);

//console.log(document.images);

// GET ELEMENT BY ID //
//console.log(document.getElementById("header-title"));
// here we selected the header with its html id name

//same as above just a different way to do it
//var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);

// //headerTitle.textContent = "hello";
// //changes the heading to "hello"

// //headerTitle.innerText = "goodbye";
// //does the same thing as above but there is a difffernece

// console.log(headerTitle.textContent);
// //displays item lister and 123 which is in span in header

// console.log(headerTitle.innerText);
// // the 123 is not there this pays attention to the styling

// // but we can usuauly use both as they have the same fucntion

// headerTitle.innerHTML = "<h3>this is h3</h3>";
// //this puts it inside the originial header
// //doesnt change it to h3 tag just puts it in there

// headerTitle.style.borderBottom = "solid 3px black";
// // so this puts bottom under the header titile

// //if we want it to go on the actual header
// header = document.getElementById("main-header");
// header.style.borderBottom = "solid 5px hotpink";

// GET ELEMENTS BY CLASS NAME //

//we know list items have a class
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// //for a particular item
// console.log(items[1]);

// //changing the text content
// items[1].textContent = "Hello helo";
// //lets change the style too
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// //For applying to all the list items at once
// //items.style.backgroundColor ='#f4f4f4';
// //this is not gonna work , this will give error
// // we have to actually loop through eacch of them
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4";
// }

// // SET ELEMENTS BY TAG NAME //

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[2]);
// li[2].style.backgroundColor = "lime";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "cyan";
// }
// // where this comes in handy is if we add a new list item
// // without the list class
// // with get by tag name we can still apply the same changes to the new item

// //  QUERY SELECTOR //
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px cyan";

// var input = document.querySelector("input");
// input.value = "hello world";
// //this adds the value to the form input box

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";
// // this changs the text inside the button
// //replaces it from submit to send

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "hotpink";
// // selecting the last element from the list items

// var lastitem = document.querySelector(".list-group-item:nth-child(2)");
// lastitem.style.color = "coral";
// //this way we can select the nth child

//  QUERY SELECTOR ALL //

//used to grab more than one thing
var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "hello bruh";

//to change multiple properties
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "red";
  even[i].style.backgroundColor = "coral";
}
