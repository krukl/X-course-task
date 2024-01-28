let name = document.getElementById('name')

name.innerHTML = sessionStorage.getItem('my-input_save')


// Price

let priceId = document.getElementById('priceId').textContent
let count = document.getElementById('count')
let totalPrice = document.getElementById('totalPrice')
totalPrice.innerHTML = priceId * count.value
count.addEventListener('keyup',sumPrice)
count.addEventListener('change',sumPrice)
function sumPrice(){
    totalPrice.innerHTML = priceId * count.value
}

// button "buy"

let buy =  document.getElementById('buy')
let hiddenCart = document.getElementById('hiddenCart')
buy.addEventListener('click', openHiddenCart)

function openHiddenCart () {
    hiddenCart.innerHTML = '<div class="formsee"><button type= "button"><img src= "img/xmark-solid.svg" id= "close"></button><div id="hideprice"><p>Price, $</p><p id="hidepriceId" class="pricesum">255</p></div><div><label for="count">Count</label><input type="number" id="hidecount" value="1" min="1"></div><div><p>Total price:</p> <p id="hidetotalPrice" class="pricesum"></p></div><button type="submit">Add to cart</button></div>'
let hidepriceId = document.getElementById('hidepriceId').textContent
let hidecount = document.getElementById('hidecount')
let hidetotalPrice = document.getElementById('hidetotalPrice')
hidetotalPrice.innerHTML = hidepriceId * hidecount.value
hidecount.addEventListener('keyup',hidesumPrice)
hidecount.addEventListener('change',hidesumPrice)
function hidesumPrice(){
    hidetotalPrice.innerHTML = hidepriceId * hidecount.value
}
let buttonClose = document.getElementById('close')
buttonClose.addEventListener('click', () => hiddenCart.innerHTML = '')
}
//sign-out for phone 