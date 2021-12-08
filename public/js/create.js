// khai bao bien
const name = document.querySelector("#name");
const birthday = document.querySelector("#birthday");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const save =  document.querySelector(".btn-success");
const back =  document.querySelector(".btn-secondary");

// id ramdom
function randomId() {
	return Math.floor(Math.random() * 100000);
}



// tạo user mới
function createUserAPI() {
    return axios.post("/users", {
        id: randomId(),
        name: name.value,
      email: email.value,
      phone: phone.value,
      birthday: birthday.value
    });
}

async function createUser() {
    try {
       createUserAPI();
    } catch (error) {
        console.log(error);
    }
}

//check User
function checkUser(){
    if(name.value == ""){
        alert("tên không được để trống")

    }else 
    if(email.value == ""){
        alert("email không được để trống")
     
    }else
    if(phone.value == ""){
        alert("phone không được để trống")
     
    }else
   if(birthday.value == ""){
        alert("birthday không được để trống")
    
    }
  
}


// Lưu
save.addEventListener("click", function(event) {
    checkUser();
    if (name.value != "" &&email.value!="" &&phone.value!="" &&birthday.value!=""){
    createUser();
    window.location.href = "index.html";
    }
})

// Quay về
back.addEventListener("click", function(event) {
window.location.href = "index.html";
})

