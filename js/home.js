function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Slider

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}




let database = firebase.database().ref(`/`);

var all = [];
let current = localStorage.getItem(`CureentUser`);
current = JSON.parse(current);

let buy = () => {
  window.location.href = `all.html`

};
console.log(all);

let count1 = 0;
database.child(`users/`).on(`child_added`, request => {
  let data = request.val();
  data.id = request.key;
  count1++

  document.getElementById(`total`).innerHTML =  count1


});

logout = () => {
  firebase
    .auth()
    .signOut()
    .then(res => {
      console.log(res, `signout`);
      localStorage.removeItem(`CureentUser`);
      window.location.href = `login.html`;
    }),
    err => {
      console.log(err, `signout error`);
    };
};
