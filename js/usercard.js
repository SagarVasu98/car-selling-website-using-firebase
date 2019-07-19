let user = localStorage.getItem(`CureentUser`);
user = JSON.parse(user)

let database = firebase.database().ref(`/`)

database.child(`allCards/`).on(`child_added`, snap => {
  var flag = true
  let check = snap.val();
    check.id = snap.key;
  
    // Checking Property if exists than show

    if(check.email === user.email ){
      flag = false

        let box = document.getElementById("row");
        let box1 = document.createElement("div");
        box1.setAttribute(`id`, check.name);
        box1.setAttribute("class", "column");
    
        let box2 = document.createElement("div");
        box2.setAttribute("class", "card");
    
        // Image
    
        var image1 = document.createElement("img");
        image1.setAttribute("src", check.sellerfile.slice(12));
        image1.setAttribute("width", "200px");
        image1.setAttribute("height", "200px");
        image1.setAttribute("style", "margin-top:10px;cursor:pointer");
        console.log(image1);
        box.appendChild(image1);
        box2.appendChild(image1);
        box1.appendChild(box2);
        box.appendChild(box1);
    
        // User Name
    
        var h1 = document.createElement("p");
        h1.setAttribute("id", "head");
        var h1_text = document.createTextNode(check.sellerName);
        h1.appendChild(h1_text);
        box2.appendChild(h1);
        box1.appendChild(box2);
        box.appendChild(box1);
    
        detail = document.createElement("input");
        detail.setAttribute("type", "button");
        detail.setAttribute("value", "Detail");
        detail.setAttribute(`id`, snap.key);
        detail.setAttribute("class", "button button3");
        console.log(detail);
    
        // Button For Checking Further Deatil
    
        detail.addEventListener(`click`, function() {
          localStorage.setItem(`userId`, JSON.stringify(this.id));
          window.location.href = `detail.html`;
        });
    
        box.appendChild(detail);
        box2.appendChild(detail);
        box1.appendChild(box2);
        box.appendChild(box1);


    }

     
  
  
  
  });
  