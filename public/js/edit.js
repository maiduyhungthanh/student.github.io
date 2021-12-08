//khai báo biến
const name = document.querySelector("#name");
const birthday = document.querySelector("#birthday");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const save =  document.querySelector("#btn-save");
const back =  document.querySelector(".btn-secondary");


// tim id
let user ;
let hrefId=0 ;
let x = location.href;
console.log(x)
for (let i =0; i <x.length; i++) {
    if(x.charAt(i)== "="){
        hrefId =Number(x.slice(i+1,x.length))
    }
}
console.log(hrefId)
// thông tin id
async function getUserById() {
      try {
        const res = await axios.get(`/users/${hrefId}`)
        user = res.data;
        name.value = user.name;
        birthday.value = user.birthday;
        email.value = user.email;
        phone.value = user.phone;
      }
      catch (error) {
      }

} 

// cập nhập thông tin 
function editUserAPI(id) {
    return axios.put(`/users/${id}`, {
     name: name.value,
      email: email.value,
      phone: phone.value,
      birthday: birthday.value
    });
}
async function editUser() {
    try {
        editUserAPI(hrefId);
    } catch (error) {
        console.log(error);
    }
}
// Check 
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
        editUser();
        window.location.href = "index.html";
        }
})

// Quay về
back.addEventListener("click", function(event) {
    window.location.href = "index.html";
})

window.onload = () => {
getUserById();
}

