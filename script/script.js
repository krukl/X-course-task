/*let username = document.getElementById('username')
let submit = document.getElementById('submit')



function User(username) {
    this.username = username;
}

submit.addEventListener('click', () => {
 nameUser =  username.value;
 console.log(nameUser)
})*/


document.getElementById('username').oninput = function () {
    sessionStorage.setItem('my-input_save', this.value);
}


