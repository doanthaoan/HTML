const userData = [
    {
        id: 1,
        name: "Thanh",
        username: "thanhvt",
        password: "password001",
        date: "20/03/1998"
    },
    {
        id: 2,
        name: "Giang",
        username: "giangvt",
        password: "pass cua Giang",
        date: "15/07/1994"
    },
    {
        id: 3,
        name: "Linh",
        username: "linhhth",
        password: "password005",
        date: "20/11/1996"
    },
    {
        id: 4,
        name: "An",
        username: "andt",
        password: "password009",
        date: "27/04/1983"
    },
    {
        id: 5,
        name: "Trung",
        username: "trungdh",
        password: "password004",
        date: "20/03/1995"
    },
];
let user2 = userData.filter((e) => (e.name.includes("a") || e.name.includes("A")))
console.log("user da filter: ",user2)
// prepare user content
let userContent = "";
function showUserData (data) {
    let htmlContent = "No data";
    if (data.length > 0) {
        htmlContent = "";
        for (let i = 0; i < data.length; i++) {
            htmlContent += `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                                <td>${data[i].username}</td>
                                <td>${data[i].password}</td>
                                <td>${data[i].date}</td>
                                <td class="action"><a href="#" class="btn btn-warning btn-edit" data-id="${data[i].id}">Edit <i class="fa fa-edit"></i></a><a href="#" class="btn btn-danger btn-delete"  data-id="${data[i].id}">Delete <i class="fa fa-trash"></i></a></td>
                            </tr>`;
        }
    }
    let userTbody = document.querySelector('table tbody');
    userTbody.innerHTML = htmlContent;
    
}
showUserData(userData);

document.getElementById("button-search").click = function () {
    const searchValue = document.getElementById("input-search").value;
    
    const newData = userData.filter(e => (e.name.includes(searchValue)))
    showUserData(newData);
}