/////////////////////////////////////////////////////////////
// THIS PROGRAM SERVES TO ACT AS A SHOP'S CHECKOUT MACHINE //
// A CHECKOUT MACHINE MUST BE ABLE TO...                   //
// 1 - STORE PRODUCT CODES, UNIT PRICES, AND DISCOUNTS     //
// 2 - CHANGE UNIT PRICES AND DISCOUNTS                    //
// 3 - STORE A LIVE CART WITH EACH INDIVIDUAL ITEM ADDED   //
// 4 - BOTH ADD AND REMOVE ITEMS FROM THE CART             //
// 5 - CALCULATE THE CART VALUE BEFORE DISCOUNTS           //
// 6 - CALCULATE DISCOUNTS, WHERE APPROPRIATE              //
// 7 - CHECKOUT THE CART, OUTPUTTING A DISCOUNTED TOTAL    //
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// 1 - STORE PRODUCT CODES, UNIT PRICES, AND DISCOUNTS     //
/////////////////////////////////////////////////////////////
let products = [ //producId,productName,unitPrice,discountType,discountCondition,discountPrice
    ["fr1","fruit tea",3.11, ["bulkfree",2,0]],
    ["sr1","strawberry",5.00, ["bulkdiscount",3,4.50]],
    ["cf1","coffee",11.23, ["none",0,0]]
]

/////////////////////////////////////////////////////////////
// 2 - CHANGE UNIT PRICES AND DISCOUNTS                    //
/////////////////////////////////////////////////////////////
let priceBoolean = false
function changePrice(productId,newPrice) { //changes the price of the chosen product
    //tests for valid input
    if (!productId) {console.log("Please enter a valid productId"); return false}
    productId = productId.toString().toLowerCase()
    products.forEach(e => {if (e[0] === productId){priceBoolean = true}})
    if (priceBoolean === false) {console.log("Please enter a valid productId"); return false}
    else if (typeof newPrice !== "number" || newPrice <= 0) {console.log("Please enter a positive number as newPrice");return false}
    //performs the below if tests are all passed
    products[products.findIndex(x => x[0] === productId)][2] = newPrice
    console.table(products)
    return
}

let discountBoolean = false
function changeDiscount(productId,discountType,discountCondition,discountPrice) { //changes the discount information for a chosen product
    //tests for valid input
    if (!productId) {console.log("Please enter a valid productId"); return false}
    productId = productId.toString().toLowerCase()
    products.forEach(e => {if (e[0] === productId){discountBoolean = true}}) 
    if (discountBoolean === false) {console.log("Please enter a valid productId");return false}
    else if (!discountType) {console.log("Please enter a valid discountType"); return false}
    discountType = discountType.toString().toLowerCase()
    if (!(discountType === "bulkfree" || discountType === "bulkdiscount" || discountType ==="none")) {console.log("Please enter a valid discountType");return false}
    else if (typeof discountCondition !== "number" || discountCondition%1 !== 0 || discountCondition <=0) {console.log("Please enter a positive integer as discountCondition");return false}
    else if (typeof discountPrice !== "number" || discountPrice <0) {console.log("Please enter a non-negative number as discountPrice"); return false}
    //performs the below if tests are all passed
    products[products.findIndex(x => x[0] === productId)][3][0] = discountType
    products[products.findIndex(x => x[0] === productId)][3][1] = discountCondition
    products[products.findIndex(x => x[0] === productId)][3][2] = discountPrice
    console.table(products)
    return
}

/////////////////////////////////////////////////////////////
// 3 - STORE A LIVE CART WITH EACH INDIVIDUAL ITEM ADDED   //
// 4 - BOTH ADD AND REMOVE ITEMS FROM THE CART             //
/////////////////////////////////////////////////////////////
let cart = [];

let cartItem = [];
let cartItemTotals = [["fr1","fruit tea",0],["sr1","strawberry",0],["cf1","coffee",0]];
let addBoolean = false, addMsg = ""
function addItem(productName,quantity) { //adds a specified quantity of the specified item to the cart
    //tests for valid input
    if (!productName) {console.log("Please enter a valid productId"); return false}
    productName = productName.toString().toLowerCase()
    addBoolean = false
    products.forEach(e => {if (e[1] === productName){addBoolean = true}}) 
    if (addBoolean === false) {
        addMsg = "Please enter a valid productName (you entered '" + productName +"')"
        console.log(addMsg)
        return false
    }
    if (typeof quantity !== "number" || quantity%1 !== 0 || quantity <=0) {
        addBoolean = false
        addMsg = "Please enter a positive whole number as a quantity"
        console.log(addMsg)
        return false
    }
    //performs the below if tests are all passed
    cartItem = []
    cartItem.push(products[products.findIndex(x => x[1] === productName)][0])
    cartItem.push(products[products.findIndex(x => x[1] === productName)][1])
    cartItem.push(products[products.findIndex(x => x[1] === productName)][2])
    for (let i=1;i<=quantity;i++) {
        cart.push(cartItem)
        cartItemTotals[cartItemTotals.findIndex(x => x[1] === productName)][2] += 1
    }
    if (express === false){console.table(cart)}
    return
}

let rmBoolean = false;
function removeItem(productName,quantity) { //removes a specified quantity of the specified item from the cart
    //tests for valid input
    if (!productName) {console.log("Please enter a valid productId"); return false}
    productName = productName.toString().toLowerCase()
    rmBoolean = false
    products.forEach(e => {if (e[1] === productName){rmBoolean = true}}) 
    if (rmBoolean === false) {console.log("Please enter a valid productName (you entered '" + productName +"')");return false}
    if (typeof quantity !== "number" || quantity%1 !== 0 || quantity <=0) {rmBoolean = false; console.log("Please enter a positive whole number as a quantity");return false}
    if (cartItemTotals[cartItemTotals.findIndex(x => x[1] === productName)][2] - quantity < 0) {console.log("There is not enough of that item in the cart to do that");return false}
    //performs the below if tests are all passed
    cartItem = []
    for (let i=0;i<quantity;i++) {
        cart.splice(cart.findIndex(x => x[1] === productName),1)
        cartItemTotals[cartItemTotals.findIndex(x => x[1] === productName)][2] -= 1
    }
    if (express === false){console.table(cart)}
    return
}

/////////////////////////////////////////////////////////////
// 5 - CALCULATE THE CART VALUE BEFORE DISCOUNTS           //
/////////////////////////////////////////////////////////////

let simplifiedCart = [ //productId,productName,subTotal,quantity
    ["fr1","fruit tea",0,0],
    ["sr1","strawberry",0,0],
    ["cf1","coffee",0,0]
]
function simplifyCart() { //Simplifies the cart down to a total for each product
    simplifiedCart.forEach(e => {
        simplifiedCart[simplifiedCart.findIndex(x => x[0]=== e[0])][2] = 0
        simplifiedCart[simplifiedCart.findIndex(x => x[0]=== e[0])][3] = 0
    })
    cart.forEach(e => {
        simplifiedCart[simplifiedCart.findIndex(x => x[0]=== e[0])][2] += e[2]
        simplifiedCart[simplifiedCart.findIndex(x => x[0]=== e[0])][3] += 1
    })
    return simplifiedCart
}

let cartValue = 0
function sumCart() { //sums the simplified cart values to give the total cart value
    cartValue = 0
    simplifiedCart.forEach(e => {
        cartValue += e[2]
    })
    return cartValue
}

let discountedCartValue = 0
function sumDiscountedCart() { //sums the simplified cart values to give the total cart value
    discountedCartValue = 0
    discountedCartTotal.forEach(e => {
        discountedCartValue += e[1]
    })
    return discountedCartValue
}

/////////////////////////////////////////////////////////////
// 6 - CALCULATE DISCOUNTS, WHERE APPROPRIATE              //
/////////////////////////////////////////////////////////////

let discountedCartTotal = [
    ["fr1",0],
    ["sr1",0],
    ["cf1",0],
]
let discountedProductTotal = 0;

let remainder = 0;
function bulkFree (discountCondition, productId, productCount, unitPrice) { 
    // applies a buy ? get 1 free discount based upon discount information and cart quantities
    if (productCount >= discountCondition) {
        while (productCount % discountCondition !=0) {
            productCount -= 1;
            remainder += 1;
        }
        discountedProductTotal = (productCount - (productCount / discountCondition) + remainder) * unitPrice;
    } else {
        discountedProductTotal = productCount * unitPrice
    }
    discountedCartTotal[discountedCartTotal.findIndex(x => x[0] == productId)][1] = discountedProductTotal
    remainder = 0;
    discountedProductTotal = 0;
    return discountedCartTotal
}

function bulkDiscount(discountCondition, discountPrice, productId, productCount, unitPrice) {
    // applies a bulk purchase discount based upon discount information and cart quantities
    if (productCount >= discountCondition) {
        discountedProductTotal = productCount * discountPrice
    } else {
        discountedProductTotal = productCount * unitPrice
    }
    discountedCartTotal[discountedCartTotal.findIndex(x => x[0] == productId)][1] = discountedProductTotal
    discountedProductTotal = 0;
    return discountedCartTotal
}

/////////////////////////////////////////////////////////////
// 7 - CHECKOUT THE CART, OUTPUTTING A DISCOUNTED TOTAL    //
/////////////////////////////////////////////////////////////

let discountlessValue = 0, discountedValue = 0, discount=0; checkoutMessage = ""
function checkout() { //chooses and calls functions to checkout the cart
    if (cart.length === 0) {console.log("there is nothing in the cart");return false}
    console.table(cart)
    simplifyCart()
    discountlessValue = sumCart()
    simplifiedCart.forEach(e => {
        if (products[products.findIndex(x => x[0] == e[0])][3][0] === "bulkfree") {
            bulkFree(products[products.findIndex(x => x[0] == e[0])][3][1],e[0],e[3],products[products.findIndex(x => x[0] == e[0])][2])
        } else if (products[products.findIndex(x => x[0] == e[0])][3][0] === "bulkdiscount") {
            bulkDiscount(products[products.findIndex(x => x[0] == e[0])][3][1],products[products.findIndex(x => x[0] == e[0])][3][2],e[0],e[3],products[products.findIndex(x => x[0] == e[0])][2])
        } else {
            discountedCartTotal[discountedCartTotal.findIndex(x => x[0] == e[0])][1] = e[2]
        }
    })
    discountedValue = sumDiscountedCart()
    discount = (discountlessValue - discountedValue).toFixed(2)
    checkoutMessage = "Your total to pay is £" + discountedValue.toFixed(2) + ", with a saving of £" + discount
    clear()
    console.log(checkoutMessage)
    return
}

let express = false
function expressCheckout(p1,q1,p2,q2,p3,q3) {//takes amounts of each product and calculates the balance due
    express = true
    clear()
    if (q1 !== 0) {
        addItem(p1,q1)
        if (addBoolean === false) {express = false;clear();return false}
    }
    if (p2 && q2) {
        addItem(p2,q2)
        if (addBoolean === false) {express = false;clear();return false} 
    }
    if (p3 && q3) {
        addItem(p3,q3)
        if (addBoolean === false) {express = false;clear();return false} 
    }
    express = false
    return checkout()
}

function clear() { //clears the cart and associated variables
    cart = []
    cartItemTotals = [["fr1","fruit tea",0],["sr1","strawberry",0],["cf1","coffee",0]]
    simplifiedCart = [["fr1","fruit tea",0,0],["sr1","strawberry",0,0],["cf1","coffee",0,0]]
    discountedCartTotal = [["fr1",0],["sr1",0],["cf1",0],]
}