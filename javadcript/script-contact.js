// let userdata = [
//   { id: 1, name: "arun", email: "arun@gmail.com", phone: 9867543623 },
//   { id: 2, name: "selva", email: "sel@gmail.com", phone: 9078654567 },
//   { id: 3, name: "mani", email: "mani123@gmail.com", phone: 6346572854 },
//   { id: 4, name: "ajith", email: "ajithat@gmail.com", phone: 7865647587 },
//   { id: 5, name: "karthi", email: "karthi345@gmail.com", phone: 8767564556 },
//   { id: 6, name: "pallavan", email: "pallavan@gmail.com", phone: 8769757569 },
//   { id: 7, name: "murugan", email: "mrugan@gmail.com", phone: 7098767564 },
//   { id: 8, name: "mathavan", email: "mathavan@gmail.com", phone: 8909878756 },
//   { id: 9, name: "kumaran", email: "kumar@gmail.com", phone: 7866767565 },
//   { id: 10, name: "sivakumar", email: "siva9802@gmail.com", phone: 8766765756 },
// ];

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

fetch("public/contact.json", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });

let userdata = fetch("http://127.0.0.1:5500/public/contact.json");

///////////////////////////////////////////////////
// elements
///////////////////////////////////////////////

let html = document.querySelector("tbody");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phoneNo");
let table = document.querySelector("table");
let addNewForm = document.getElementById("addnew-form");
let updateBtn = document.getElementById("update-btn-container");
let addBtn = document.getElementById("add-btn-container");

//////////////////////////////////////////////////
// show the data in the table list
////////////////////////////////////////////////
function doShowList() {
  let url = "demo/contact.json";
  fetch(url)
    .then((res) => res.json())

    .then((value) => {
      let userdata = value.contact;
      for (let i = 0; i < userdata.length; i++) {
        html.innerHTML += `<tr id=row-${userdata[i].id}>
      <td>${i + 1}</td>
       <td class="text-uppercase">${userdata[i].name}</td>
      <td>${userdata[i].email}</td>
      <td>${userdata[i].phone}</td>
      <td><button  onclick="doEdit(${
        userdata[i].id
      },${i})" class="btn btn-outline-primary fst-italic" >Edit</button>
      <button onclick="doDelete(${i})" class="btn  btn-outline-danger fst-italic">Delete</button></td>
      </tr>`;
      }
    });
}

doShowList();

///////////////////////////////////////
// show the add new user form
////////////////////////////////////

function doAdd() {
  table.style.opacity = "0.5";
  addNewForm.style.display = "block";
  updateBtn.style.display = "none";
  addBtn.style.display = "block";
}

///////////////////////////////////////
// add new user to store the userdata
//////////////////////////////////////

function addNew() {
  addNewForm.style.display = "none";
  table.style.opacity = "1";
  if (name.value != "" && email.value != "" && phone.value != "") {
    let addValue = {
      id: userdata.length + 1,
      name: name.value,
      email: email.value,
      phone: phone.value,
    };

    userdata.push(addValue);
    html.innerHTML = "";

    doShowList();
  } else {
    alert("input value is empty,Please enter the value..");
  }
}

/////////////////////////////////////
// to show the edit form
////////////////////////////////////

function doEdit(id, i) {
  let tr = document.getElementById(`row-${id}`);
  let th = tr.getElementsByTagName("td");
  name.value = th[1].innerHTML;
  email.value = th[2].innerHTML;
  phone.value = th[3].innerHTML;

  table.style.opacity = "0.5";
  addNewForm.style.display = "block";
  updateBtn.style.display = "block";
  addBtn.style.display = "none";
  window.index = i;
}

////////////////////////////////////////////////
// to update form the values
//////////////////////////////////////////////

function doUpdate() {
  addNewForm.style.display = "none";
  table.style.opacity = "1";
  let editValue = {
    id: userdata[index].id,
    name: name.value,
    email: email.value,
    phone: phone.value,
  };

  userdata.splice(index, 1, editValue);
  html.innerHTML = "";
  doShowList();
}

/////////////////////////////////////////////
// delete the userdata
/////////////////////////////////////////////

function doDelete(i) {
  if (confirm("Do you want delete Contact : " + userdata[i].name + "...?")) {
    doShowList();

    userdata.splice(i, 1);
    html.innerHTML = "";
    doShowList();
  }
}

/////////////////////////////////////////////
// to close the add new user form
/////////////////////////////////////////////

function doCancel() {
  addNewForm.style.display = "none";
  table.style.opacity = "1";
  name.value = email.value = phone.value = "";
  //   name.value = "";
  //   email.value = "";
  //   phone.value = "";
}
/////////////////////////////////////////////
// change the input values
/////////////////////////////////////////////
// function doname() {
//   let fullName = document.getElementById("name");
//   fullName.value = fullName.value.toUpperCase();
// }
// function doemail() {
//   let email = document.getElementById("email");
//   email.value = email.value.toLowerCase();
// }
////////////////////////////////////////////////////
//  search the contact
////////////////////////////////////////////////////
function doSearch() {
  let search = document.getElementById("search");
  // let captal = search.toUpperCase();
  let table = document.querySelector("table");
  let tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td");
    console.log(td);
    //  for(let j=0;j<tdata;j++){
  }
}
doSearch();
