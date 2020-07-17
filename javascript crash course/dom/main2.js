//little form script

const myform = document.querySelector('#my-form');
const nameinput = document.querySelector('#name');

const emailinput = document.querySelector('#email');


const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if (nameinput.value === "" || emailinput.value === "") {
        msg.classList.add('error');
        //style.css class cahnges the color and stuuf
        msg.innerHTML = 'please enter all fields';
        //shows the message
        setTimeout(() => msg.remove(), 3000);
        //removes the message after three seconds
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameinput.value} : ${emailinput.value}`));

        userlist.appendChild(li);
        //append to the list in html

        //clear fields
        nameinput.value = '';
        emailinput.value = '';

    }
}