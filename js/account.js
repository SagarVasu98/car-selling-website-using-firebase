let database = firebase.database().ref(`/`);

let current = localStorage.getItem(`CureentUser`);
current = JSON.parse(current);


database.child(`users/${current.id}/`).on(`value`, snap => {
  let user = snap.val();
  console.log(user);

  document.getElementById(`name`).innerHTML = user.name;
  document.getElementById(`age`).innerHTML = user.age;
  document.getElementById(`phone`).innerHTML = user.phone;
  document.getElementById(`profile`).src = user.file.slice(12);
  document.getElementById(`email`).innerHTML = user.email;
  document.getElementById(`city`).innerHTML = user.city;
});

let edit = () => {
  document.getElementById(`dashboard`).style.display = `none`;
  document.getElementById(`edit`).style.display = `block`;


  database.child(`users/${current.id}`).on(`value`, snap1 => {
    let user1 = snap1.val();
    console.log(`user Data ==>`,user1);

    document.getElementById(`name1`).value = user1.name;
    document.getElementById(`email1`).value = user1.email;
    document.getElementById(`pass1`).value = user1.password;
    document.getElementById(`phone1`).value = user1.phone;
    document.getElementById(`city1`).value = user1.city;
    document.getElementById(`age1`).value = user1.age;

    // Update Button


    document.getElementById(`update`).addEventListener(`click`, () => {


      let name = document.getElementById(`name1`).value;
      let email = document.getElementById(`email1`).value;
      let password = document.getElementById(`pass1`).value;
      let phone = document.getElementById(`phone1`).value;
      let file = document.getElementById(`file1`).value;
      let city = document.getElementById(`city1`).value;
      let age = document.getElementById(`age1`).value;
      let id = current.id;

      let allUsers = {
        name,
        email,
        password,
        phone,
        file,
        city,
        age,
        id,
      };

      database.child(`users/${current.id}`).set(allUsers);
      current.password = password;
      localStorage.setItem(`CureentUser`, JSON.stringify(allUsers));

      document.getElementById(`dashboard`).style.display = `block`;

      document.getElementById(`edit`).style.display = `none`;
    });
  });
};



let join = () => {
  window.location.href = `../index.html`;
};
