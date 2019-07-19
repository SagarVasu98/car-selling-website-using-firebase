let database = firebase.database().ref(`/`)


let signUp = () => {

  // Getting Data From Input Feilds

  let name = document.getElementById(`name`).value;
  let email = document.getElementById(`email`).value;
  let password = document.getElementById(`pass`).value;
  let phone = document.getElementById(`phone`).value;
  let file = document.getElementById(`file`).value;
  let city = document.getElementById(`city`).value;
  let age = document.getElementById(`age`).value;

  let allUsers = {
    name,
    email,
    password,
    phone,
    file,
    city,
    age
  };

  firebase.auth().createUserWithEmailAndPassword(allUsers.email, allUsers.password)
    .then(resolve => {
      database.child(`users/${resolve.user.uid}`).set(allUsers);
      alert(`User Signup Succesfully`);
      window.location.href = `pages/login.html`
    })
    .catch(function(error) {
      alert(error.code);
      alert(error.message);
    });

  console.log(`All Users ==>`,allUsers);

  document.getElementById(`name`).value = ``;
  document.getElementById(`email`).value = ``;
  document.getElementById(`pass`).value = ``;
  document.getElementById(`phone`).value = ``;
  document.getElementById(`city`).value = ``;
  document.getElementById(`age`).value = ``;
};
