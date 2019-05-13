class Cart {

    //cart is a array of Elements
    cartID = null;
    cart = [];
    constructor(cartID){
        this.cartID = cartID;
        this.checkStorage()
    }

    //adding elements in to cart
    add(element){
        this.cart.push(element);
        this.updateStorage()
    }

    //remove element from cart by index
    remove(index){
        this.cart.splice(index, 1);
        this.updateStorage()
    }

    //check localstorage to draw cart
    checkStorage(){
        let cart = JSON.parse(localStorage.getItem(this.cartID));
        if( cart !== null){
            this.cart = cart;
            this.drawElements(cart)
        }
    }

    //update localstorage data
    updateStorage(){
        localStorage.setItem(this.cartID, JSON.stringify(this.cart));
        this.drawElements(this.cart)
    }

    //drawing/redrawing cart elements
    drawElements(elements){
        let myHTML = [];
        elements.forEach(function (element, index) {
            let el = `
               <li class="list-group-item">
               <span class="nume">${element.name}</span>
               <span class="pret">${element.price}</span>
                    <button class="remove" onclick="cart.remove(${index})">Remove</button>
                </li>
            `;
            myHTML.push(el)
        });
        document.querySelector('#'+ this.cartID).innerHTML = myHTML.join();
    }

}
