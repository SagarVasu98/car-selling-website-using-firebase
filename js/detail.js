let database = firebase.database().ref(`/`);

let current = localStorage.getItem(`userId`);
current = JSON.parse(current);

let currentUser = localStorage.getItem(`CureentUser`);
currentUser = JSON.parse(currentUser);



database.child(`allCards/${current}/`).on(`value`, snap => {
  let data = snap.val();
  data.id = snap.key;
  console.log(data.id);

  if (data.id === current) {
    document.getElementById(`name`).innerHTML = data.sellerName;
    document.getElementById(`carName`).innerHTML = data.sellerCar;
    document.getElementById(`carPrice`).innerHTML = data.sellerPrice;
    document.getElementById(`carName`).innerHTML = data.sellerCar;
    document.getElementById(`carDoors`).innerHTML = data.sellerdoors;
    document.getElementById(`carSeats`).innerHTML = data.sellerseats;
    document.getElementById(`carImage`).src = data.sellerfile.slice(12);
    document.getElementById(`carDetails`).innerHTML = data.sellerdetail;
  }

  document.getElementById(`btn`).addEventListener(`click`, function() {

    if(currentUser === null){
      alert(`Login to Buy`)
      window.location.href = `login.html`
    }
    else{
      if (currentUser.email === data.email) {
        alert(`Sorry You Can Not Buy Your Own Card`);
      } else {
        document.getElementById(`img`).style.display = `block`;
        document.getElementById(`btn`).style.display = `none`;
  
        setTimeout(() => {
          let all = {
            sellerName: currentUser.name,
            sellerPrice: data.sellerPrice,
            sellerCar: data.sellerCar,
            sellerdoors: data.sellerdoors,
            sellerseats: data.sellerseats,
            sellerfile: data.sellerfile,
            sellerdetail: data.sellerdetail,
            email: currentUser.email
          };
          console.log(`card ==>`, snap.val());
  
          database.child(`allCards/${current}/`).set(all);
          document.getElementById(`img`).style.display = `none`;
          document.getElementById(`btn`).style.display = `block`;
          document.getElementById(`btn`).innerHTML = `Buyed SuceesFully`;
  
  
        }, 3000);
      }

    }
  })

  
  if (currentUser.email === data.email) {
    document.getElementById(`btn`).innerHTML = `Car ALready Buyed`
    document.getElementById(`btn`).disabled = true;


  }
});


