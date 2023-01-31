<h1>THIS PROGRAM ACTS TO SERVE AS A SHOP'S CHECKOUT MACHINE</h1>


<section id="user-guide">
<h2>DIRECTIONS FOR USE</h2>

<p>The functions available to the user are outlined below:</p>

<p><strong>expressCheckout(<em>p1,q1,p2,q2,p3,q3</em>)</strong>
<ul>
   <li>performs checkout() on a specified number of each product.</li>
   <li>p1,p2,p3 can take any of: "Fruit tea","Strawberry","Coffee"</li>
   <li>q1,q2,q3 can take any positive integer</li>
   <li>p2,q2,p3,q3 can all be omitted if only one product type is required. Similar logic for two product types.</li>
</ul></p>   

<p><strong>addItem(<em>productName,quantity</em>)</strong>
<ul>
   <li>Adds a specified number of the specified product to the cart.</li>
   <li>productName can take any of: "Fruit tea","Strawberry","Coffee"</li>
   <li>quantity can take any positive integer</li>
</ul></p>
   

<p><strong>removeItem(<em>productName,quantity</em>)</strong>
<ul>
   <li>Removes a specified number of the specified product from the cart, if it is possible to do so.</li>
   <li>productName can take any of: "Fruit tea","Strawberry","Coffee"</li>
   <li>quantity can take any positive integer</li>
</ul></p>

<p><strong>checkout()</strong>
<ul>
   <li>calculates the cart value before and after discounts are applied, then returns the balance due and amount saved.</li>
</ul></p>

<p><strong>changePrice(<em>productId, newPrice</em>)</strong>
<ul>
   <li>Changes the price of a product.</li>
   <li>productId can take any of: "FR1", "SR1", "CF1"</li>
   <li>newPrice can take any positive number</li>
</ul></p>
   
<p><strong>changeDiscount(<em>productId, discountType, discountCondition, discountPrice</em>)</strong>
<ul>
   <li>Changes the discount applied to a product.</li>
   <li>productId can take any of: "FR1","SR1","CF1"</li>
   <li>discountType can take any of: "bulkFree" (for BOGOF-type discounts), "bulkDiscount" (for bulk price reductions), "NONE"</li>
   <li>discountCondition is the number of units required to activate the discount, and can take any positive integer</li>
   <li>discountPrice is the product price when discounted. Can be any positive number for "bulkDiscount", or 0 for other discount types.</li>
</ul></p>

</section>

<section id="tests">
<h2>TESTS</h2>
<p>Below are outlined a set of tests for each function in the program to ensure they produce the correct output when given only valid input</p>

<p><strong>changePrice()</strong>
<ul>
  <li>Should only take "FR1","SR1",or "CF1" as productId
    <ul>
      <li>changePrice() should prompt "Please enter a valid productId" and return false</li>
      <li>changePrice(1,1) should prompt "Please enter a valid productId" and return false</li>
      <li>changePrice("",1) should prompt "Please enter a valid productId" and return false</li>
      <li>changePrice("string",1) should prompt "Please enter a valid productId and return false</li>
      <li>changePrice("Fruit tea",1) should prompt "Please enter a valid productId" and return false</li>
      <li>changePrice("FR1",1) should pass and return products[]</li>
    </ul>
  </li>
  <li>Should only take a positive number as newPrice
    <ul>
      <li>changePrice("FR1") should prompt "Please enter a positive number as newPrice" and return false</li>
      <li>changePrice("FR1","") should prompt "Please enter a positive number as newPrice" and return false</li>
      <li>changePrice("FR1",0) should prompt "Please enter a positive number as newPrice" and return false</li>
      <li>changePrice("FR1",-1) should prompt "Please enter a positive number as newPrice" and return false</li>
      <li>changePrice("FR1",1) should pass and return products[]</li>
      <li>changePrice("FR1",1.1) should pass and return products[]</li>
    </ul>
  </li>
</ul></p>

<p><strong>changeDiscount()</strong>
<ul>
  <li>Should only take "FR1","SR1",or "CF1" as productId
    <ul>
      <li>changeDiscount() should prompt "Please enter a valid productId" and return false</li>
      <li>changeDiscount(1,1) should prompt "Please enter a valid productId and return false"</li>
      <li>changeDiscount("",1) should prompt "Please enter a valid productId" and return false"</li>
      <li>changeDiscount("string",1) should prompt "Please enter a valid productId and return false</li>
      <li>changeDiscount("Fruit tea",1) should prompt "Please enter a valid productId" and return false</li>
      <li>changeDiscount("FR1","bulkFree",2,0) should pass and return products[]</li>
    </ul>
  </li>
  <li>Should only take "bulkFree", "bulkDiscount", or "NONE" as discountType
    <ul>
      <li>changeDiscount("FR1") should prompt "Please enter a valid discountType" and return false</li>
      <li>changeDiscount("FR1",0) should prompt "Please enter a valid discountType" and return false</li>
      <li>changeDiscount("FR1","") should prompt "Please enter a valid discountType" and return false</li>
      <li>changeDiscount("FR1","string") should prompt "Please enter a valid discountType" and return false</li>
      <li>changeDiscount("FR1","bulkFree",3,0) should pass and return products[]</li>
      <li>changeDiscount("FR1","bulkDiscount",3,0) should pass and return products[]</li>
      <li>changeDiscount("FR1","NONE",3,0) should pass and return products[]</li>
    </ul>
  </li>
  <li>Should only take positive integers as discountCondition
    <ul>
      <li>changeDiscount("FR1","bulkDiscount") should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount","") should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",-1) should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",-1.1) should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",0) should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",0.1) should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",1.1) should prompt "Please enter a positive integer as discountCondition" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",1,0) should pass and return products[]</li>
    </ul>
  </li>
  <li>Should only take a non-negative number as discountPrice
    <ul>
      <li>changeDiscount("FR1","bulkDiscount",3) should prompt "Please enter a non-negative number as discountPrice" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",3,"") should prompt "Please enter a non-negative number as discountPrice" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",3,-1) should prompt "Please enter a non-negative number as discountPrice" and return false</li>
      <li>changeDiscount("FR1","bulkDiscount",3,0) should pass and return products[]</li>
      <li>changeDiscount("FR1","bulkDiscount",3,1) should pass and return products[]</li>
      <li>changeDiscount("FR1","bulkDiscount",3,1.11) should pass and return products[]</li>
    </ul>
  </li>
</ul></p>

<p><strong>addItem()</strong> (removeItem() should also follow the same tests, with the added requirement of only passing if there are enough items of the specified type to remove from the cart)
<ul>
  <li>Should only take "Fruit tea","Strawberry",or "Coffee" as productName
    <ul>
      <li>addItem() should prompt "Please enter a valid productName" and return false</li>
      <li>addItem(1,1) should prompt "Please enter a valid productName" and return false</li>
      <li>addItem("",1) should prompt "Please enter a valid productName" and return false</li>
      <li>addItem("string",1) should prompt "Please enter a valid productName" and return false</li>
      <li>addItem("FR1",1) should prompt "Please enter a valid productName" and return false</li>
      <li>addItem("Fruit tea",1) should pass and return cart[]</li>
    </ul>
  </li>
  <li>Should only take a positive integer as quantity
    <ul>
      <li>addItem("Fruit tea") should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea","") should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea",0) should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea",-1) should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea",-1.1) should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea",0.1) should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea",1.1) should prompt "Please enter a positive number as quantity" and return false</li>
      <li>addItem("Fruit tea",1) should pass and return cart[]</li>
    </ul>
  </li>
</ul></p>

<p><strong>checkout()</strong>
<ul>
  <li>should only run if there are items in the cart
    <ul>
    <li>checkout() with cart=[] should prompt "there is nothing in the cart" and return false</li>
    </ul>
  </li>
  <li>should correctly calculate the discounted price of every cart
    <ul>
    <li>checkout() with cart=[1Tea 1Strawb 1Coffee] should pass and return "Your total to pay is £19.34, with a saving of £0.00"</li>
    <li>checkout() with cart=[3Tea 4Strawb 1Coffee] should pass and return "Your total to pay is £35.45, with a saving of £5.11"</li>
    </ul>
  </li>
</ul></p>

<p><strong>expressCheckout()</strong>
<ul>
  <li>should pass all tests for addItem() and checkout()</li>
  <li>should perform checkout() on carts of one, two, or three product types
    <ul>
    <li>expressCheckout("Fruit tea",1) should pass and return "Your total to pay is £3.11, with a saving of £0.00"</li>
    <li>expressCheckout("Fruit tea",1,"Strawberry",1,) should pass and return "Your total to pay is £8.11, with a saving of £0.00"</li>
    <li>expressCheckout("Fruit tea",1,"Strawberry",1,"Coffee",1) should pass and return "Your total to pay is £19.34, with a saving of £0.00"</li>
  </li>
</ul></p>


</section>

<section id="dev-log">
<h2>DEV LOG</h2>

<p><strong>Development notes below:</strong></p>


<p>A checkout machine must be able to...
<ol>
  <li>Store product codes, unit prices, and discount information</li>
 
  <li>Change unit prices and discount information</li>
 
  <li>Store a live shopping cart with each individual item added</li>
 
  <li>Both add and remove items from the shopping cart</li>
 
  <li>Calculate the cart value before discounts</li>
 
  <li>Calculate discounts, where appropriate</li>
 
  <li>Checkout the cart, outputting a discounted total</li>
 </ol></p>

<p>JavaScript will form the core of this algorithm, and both array methods and functions will be utilised in majority. Each of the seven functionality points above is discussed below as they are built out:</p>


<p><strong>1 - Store product codes, unit prices, and discount information</strong>
<ul>
  <li>"products" and "discounts" were intitialised as arrays containing relevant information provided in the task.</li>
  <li>On a second pass, discounts[] was absorbed into products[] for simplicity, and all references to it were updated appropriately.
</ul></p>

<p><strong>2 - Change unit prices and discount information</strong>
<ul>
  <li>changePrice() and changeDiscount() were defined as functions to change the price and discount applied to a product respectively.</li>
  <li>Appropriate tests were implemented at the top of the function.</li>
  <li>On a second pass, a logic error in the productId test for both functions was fixed to account for its iterative nature.</li>
  <li>On a third pass, the logic of the number-based tests in both functions was changed to endsure only valid inputs would pass.</li>
  <li>On a fourth pass, test failures were changed to return "false" and console.log the error prompt instead of returning it directly</li>
</ul></p>

<p><strong>3 - Store a live shopping cart with each individual item added</strong>
<ul>
  <li>"cart" was initialised as an empty array.</li>
</ul></p>

<p><strong>4 - Both add and remove items from teh shopping cart</strong>
<ul>
  <li>addItem() was defined as a function to add a specified number of a specified item to the cart.</li>
  <li>The cart stores each individual item added as a copy of the associated array item in "products".</li>
  <li>removeItem() was defined as a funtion to remove a specified number of a specified item from the cart.</li>
  <li>If there are enough items to do so, the function removes an item of the correct product from "products" as many times as needed.</li>
  <li>Appropriate tests were implemented at the top of both functions.</li>
  <li>On a second pass, test failures were changed to return "false" and console.log the error prompt instead of returning it directly</li>
</ul></p>

<p><srong>5 - Calculate the cart value before discounts</strong>
<ul>
  <li>simplifyCart() was defined to reduce the cart down to a single entry for each product type, with a quantity and sub-total cost.</li>
  <li>sumCart() was defined to sum the sub-total costs in the simplified cart to output a total cart value as a number.</li>
  <li>Both functions had a test implemented which ensures they only proceed if there are items in the cart.</li>
</ul></p>

<p><strong>6 - Calculate discounts, where appropriate</strong>
<ul>
  <li>bulkFree() and bulkDiscount() were defined to apply each of the two types of discount respectively when called.</li>
</ul></p>

<p><strong>7 - Checkout the cart, outputting a discounted total</strong>
<ul>
  <li>chackout(), expressCheckout(), and clear() were all defined.</li>
  <li>checkout() chooses and calls appropriate functions to sum the cart, apply discounts, and output both balance due and total saved.</li>
  <li>expressCheckout() takes an amount of each product and calls checkout(), essentially performing a purchase in a single function.</li>
  <li>clear() simply empties the cart and associated variables after checkout() is performed, essentially saying "next customer".</li>
  <li>upon a later pass, the selection logic within expressCheckout() was altered to allow 0 quantities to be skipped</li>
</ul></p>

<p><strong>HTML work</strong>
<ul>
<li>After the JavaScript work above was completed, index.html was created and a reference to script.js was added to embed the code automatically when index.html is opened</li>
</ul></p>