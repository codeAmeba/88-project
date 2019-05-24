

function onclick() {
  return console.log(mySandwich);
}

let myBread = document.querySelector('.breadList');
let myBreadSelect = '';
for (let i = 0; i < myBread.length; i++) {
  if (myBread[i].checked) myBreadSelect += (myBread[i].name);
} console.log(myBreadSelect);

