
const orderCheck = document.querySelector('.popup');
orderCheck.addEventListener('click', function () {
  alert('???');
})

const mySandwich = document.querySelectorAll('input');


let myBread = document.getElementsByClassName('myBread');

let myBreadSelect = '';
for (let i = 0; i < myBread.length; i++) {
  if (myBread[i].checked) myBreadSelect += myBread[i].name;
}


// const str = '';
// str += adding comments;
// `정수영바보${str}`




