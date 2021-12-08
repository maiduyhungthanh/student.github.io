//truy cập vào các thành phần
const user_list = document.querySelector("tbody")
//khai bao bien
let users = []
//API lấy danh sách user
function getUserAPI() {
    return axios.get("/users")
}
//render UI - hiên thi danh sach users  ra ngoài giao dien
function renderUI(arr) {
    user_list.innerHTML = ""
    if (arr.length == 0) {
        user_list.innerHTML = "không có học sinh nào"
        return
    }
    for (let i = 0; i < arr.length; i++) {
        user_list.innerHTML += `
        <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].birthday}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].phone}</td>
        <td>
            <a href="/edit.html?id=${arr[i].id}" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
            |
            <a class="text-danger" onclick="deleteUser(${arr[i].id})"><i class="fa fa-trash-alt"></i> Xóa</a>
        </td>
        </tr>
        `
    }
}
// Lấy danh sách user
async function getUsers() {
    try {
        const res = await getUserAPI()
        users = res.data
        users.sort((a, b) => -(a.id - b.id))
        //render ra ngoài giao dien
        renderUI(users)
        console.log(users.length)
    } catch (error) {}
    
}

window.onload = () => {
    getUsers();
}


// API xóa hoc sinh
function deleteUserAPI(id){
     return axios({
         method: "delete",
         url: `/users/${id}`
     })
}
// Hàm xử lý việc xóa
async function deleteUser(id) {
    r = confirm("Ban co muon xoa khong?");
    if(r == true){
    try {
        await deleteUserAPI(id) // Gọi API xóa
        // Xóa user trong mảng users ban đầu
        users.forEach((user, index) => {
            if(user.id == id) {
                users.splice(index, 1)
            }
        })
        renderUI(users)
    } catch (error) {
        console.log(error);
    }
}
}