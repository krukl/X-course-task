document.getElementById('username').oninput = function () {
    sessionStorage.setItem('my-input_save', this.value);
}


