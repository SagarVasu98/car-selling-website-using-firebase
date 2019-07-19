let database = firebase.database().ref(`/`);

let currentuser = localStorage.getItem(`CureentUser`);
currentuser = JSON.parse(currentuser)


let add = () => {

  if(currentuser === null){
    alert(`Login First`)
    window.location.href = `login.html`
  }
  else{
      /****************  Getting Data From Input Fields   *********************** */

  let sellerName = document.getElementById(`seller`).value;
  let sellerCar = document.getElementById(`car`).value;
  let sellerPrice = document.getElementById(`price`).value;
  let sellerfile = document.getElementById(`file`).value;
  sellerfile.slice(12)
  console.log(sellerfile)
  let sellerdetail = document.getElementById(`para`).value;
  let sellerdoors = document.getElementById(`doors`).value;
  let sellerseats = document.getElementById(`seats`).value;
  let email = currentuser.userEmail

  /****************  Validation   *********************** */

  if (sellerName.length === 0) {
    alert("Please enter a Seller Name");
    sellerName.focus;
  } else if (sellerCar.length === 0) {
    alert("Please enter a Car Name");
    sellerCar.focus;
  } else if (sellerPrice.length < 6) {
    alert("Please enter correct Price");
    sellerPrice.focus;
  }

  // else if (sellerfile) {
  //     alert('Please provide a valid email address');
  //     userEmail.focus;
  //     return false;
  // }
  else if (sellerdetail.length === 0) {
    alert("Please enter Intro Again");
    userEmail.focus;
    return false;
  } else {
    let sellerCard = {
      sellerName,
      sellerCar,
      sellerPrice,
      sellerdetail,
      sellerseats,
      sellerdoors,
      sellerfile,
      email : currentuser.email
    };




    console.log(`card==>`,sellerCard);

    database.child(`allCards/`).push(sellerCard)

}


    
  }

}