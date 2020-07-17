//console.log(window);
//window.alert(1);
//single element selectors
//const form = document.getElementById('my-form')
//console.log(form);

//console.log(document.querySelector('.container'));
//console.log(document.querySelector('h1'));


//multiple element
//console.log(document.querySelectorAll('.item'));
//see this returns an array
//recommend to use this allquery secltor as it is new


//console.log(document.getElementsByClassName('item'));
//this gives us an html collection

//generally we wanna use quwery seleectors

//this is how we can select things from the dom



//how to loop through
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
//we are looping  and grabbing each item

//selecting ul items from html
const ul = document.querySelector('.items');

//ul.remove(); it all will be gone

//ul.lastElementChild.remove();
//check the html page item3 is gone

ul.firstElementChild.textContent = 'hello';
//item1 changed to hello

ul.children[1].innerText = 'brad';
//cahanged the second one to brad

ul.lastElementChild.innerHTML = '<h1>hellobruh</h1>'
//adding the html thofugh javbascriopt

const btn = document.querySelector('.btn');
btn.style.background = 'red';
//manipulating css from here can be useful
//for real time event channges

//btn.addEventListener('click', (e) => {
//   e.preventDefault();
//  console.log('click');
//});
//we click it shows event in the console
//prevent default keeps the action in the console
//abd stops from perforimng the actual work it needed to do


btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>BRUH</h1>'
    //on click it changes last child to bruh
    document.querySelector('body').classList.add('bg-dark');
    //this bgdark is a class in  style.css file
});

