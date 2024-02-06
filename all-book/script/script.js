let name = document.getElementById('name')
name.innerHTML = sessionStorage.getItem('my-input_save')
const doc = document.getElementById('books')
const toFive = document.getElementById('5')
const toTen = document.getElementById('10')
const toFifteen = document.getElementById('15')
const toTwenty = document.getElementById('20')
const toTwentyFive = document.getElementById('25')
const toThirty = document.getElementById('30')
const toThirtyFive = document.getElementById('35')
const toForty = document.getElementById('40')
const toFortyFive = document.getElementById('45')
const toFifty = document.getElementById('50')
const search = document.getElementById('search')

class Products {
    render() {
        let htmlCatalog = []
        let filterPrice5 = []
        let filterPrice10 = []
        let filterPrice15 = []
        let filterPrice20 = []
        let filterPrice25 = []
        let filterPrice30 = []
        let filterPrice35 = []
        let filterPrice40 = []
        let filterPrice45 = []
        let filterPrice50 = []
        catalog.forEach (({ id, author, price, image, title, shortDescription, description}) => {
// ALL BOOK
            htmlCatalog.push( `
            <li id=${price}> 
            <p id="title">${title}</p>
            <a href ="specific-book/index.html"><img src="${image}" id="image"></a>
            <p id="author">${author}</p>
            <span id="price"><p >Price</p><p>${price} $</p></span>
            </li>`)
            
            
// Filter to 10
             if (price < 5) {
                filterPrice5.push(`<li id=${price}> <a href="">
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </a></li>`)
            } 
            else if (price > 5 && price <= 10 ) {
                filterPrice10.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 10 && price <= 15) {
                filterPrice15.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 15 && price <= 20) {
                filterPrice20.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 20 && price <= 25) {
                filterPrice25.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 25 && price <= 30) {
                filterPrice30.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 30 && price <= 35) {
                filterPrice35.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 35 && price <= 40) {
                filterPrice40.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 40 && price <= 45) {
                filterPrice45.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 
            else if (price > 45) {
                filterPrice50.push(`<li id=${price}> 
                    <p id="title">${title}</p>
                    <img src="${image}" id="image">
                    <p id="author">${author}</p>
                    <span id="price"><p >Price</p><p>${price} $</p></span>
                    </li>`)
            } 

       
        })
        const html = `<ul class="onebook">${htmlCatalog}</ul>`
        doc.innerHTML = html

        const htmlfilterPrice5 = `<ul class="onebook">${filterPrice5}</ul>`
        toFive.addEventListener ('click', ()=> {
            if (toFive.checked) {doc.innerHTML = htmlfilterPrice5} else { doc.innerHTML = html}
        })
       
        const htmlfilterPrice10 = `<ul class="onebook">${filterPrice10}</ul>`
        toTen.addEventListener ('click', ()=> {
            if (toTen.checked) {doc.innerHTML = htmlfilterPrice10} else { doc.innerHTML = html}
        })

        const htmlfilterPrice15 = `<ul class="onebook">${filterPrice15}</ul>`
        toFifteen.addEventListener ('click', ()=> {
            if (toFifteen.checked) {doc.innerHTML = htmlfilterPrice15} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice20 = `<ul class="onebook">${filterPrice20}</ul>`
        toTwenty.addEventListener ('click', ()=> {
            if (toTwenty.checked) {doc.innerHTML = htmlfilterPrice20} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice25 = `<ul class="onebook">${filterPrice25}</ul>`
        toTwentyFive.addEventListener ('click', ()=> {
            if (toTwentyFive.checked) {doc.innerHTML = htmlfilterPrice25} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice30 = `<ul class="onebook">${filterPrice30}</ul>`
        toThirty.addEventListener ('click', ()=> {
            if (toThirty.checked) {doc.innerHTML = htmlfilterPrice30} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice35 = `<ul class="onebook">${filterPrice35}</ul>`
        toThirtyFive.addEventListener ('click', ()=> {
            if (toThirtyFive.checked) {doc.innerHTML = htmlfilterPrice35} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice40 = `<ul class="onebook">${filterPrice40}</ul>`
        toForty.addEventListener ('click', ()=> {
            if (toForty.checked) {doc.innerHTML = htmlfilterPrice40} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice45 = `<ul class="onebook">${filterPrice45}</ul>`
        toFortyFive.addEventListener ('click', ()=> {
            if (toFortyFive.checked) {doc.innerHTML = htmlfilterPrice45} else { doc.innerHTML = html}
        })
        
        const htmlfilterPrice50 = `<ul class="onebook">${filterPrice50}</ul>`
        toFifty.addEventListener ('click', ()=> {
            if (toFifty.checked) {doc.innerHTML = htmlfilterPrice50} else { doc.innerHTML = html}
        })
        


    }
}
const productsPage = new Products()
productsPage.render()



//








