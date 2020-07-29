var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
//form submit event
form.addEventListener("submit", addItem);
//delete evnet

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);

//add item

function addItem(e) {
  e.preventDefault();
  //console.log(1);

  //get input value (it has the id item)
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";
  //console.log(li);

  //appending the text
  // add text node with input value

  li.appendChild(document.createTextNode(newItem));

  //create the delete button elemet
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //append the text node to delete button
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

//remove item fnciton

function removeItem(e) {
  //console.log(1);
  //if we just put this if we cloick anywhere on the site it will fire
  // but we want to fire only fro delete button

  if (e.target.classList.contains("delete")) {
    console.log("pressed delete");
    if (confirm("Are you sure ?")) {
      var li = e.target.parentElement;
      //li is actually ul as we sleected the parent of the target
      //then we romved it with remove child
      itemList.removeChild(li);
    }
  }
}

//filter iterms function

function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  //console.log(text);
  var items = itemList.getElementsByTagName("li");

  //but we need to convert this html collection into array

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    //console.log(itemName);
    //lets compare the item name to search box text
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
      //everything dissapers remians only the filter item
    }
  });
}
