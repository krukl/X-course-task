

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

//hideprice 


// button "buy"

let buy =  document.getElementById('buy')
let hiddenCart = document.getElementById('hiddenCart')
buy.addEventListener('click', openHiddenCart)

function openHiddenCart () {
    hiddenCart.innerHTML = '<div class="formsee" id = "form"><div id="hideprice"><p>Price, $</p><p id="hidepriceId" class="pricesum">255</p></div><div><label for="count">Count</label><input type="number" id="hidecount" value="1" min="1"></div><div><p>Total price:</p> <p id="hidetotalPrice" class="pricesum"></p></div><button type="submits">Add to cart</button></div>'
    console.log(2)
}
//sign-out for phone 