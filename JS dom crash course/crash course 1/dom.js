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

console.log(document.images);
