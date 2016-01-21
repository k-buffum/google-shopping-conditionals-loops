var data = require("./products.json")

// Write your solutions below

/*
1.) The `kind` of results you're are dealing  are `shopping#products`.
Go through the `items` and find all results that have `kind` of `shopping#product`.
How many are there? Where else is this count information stored in the search results?
*/

console.log("There are " + data["items"].length + " items in the google shopping list.");
console.log("~~~~~~~~~~~~~~~~~~~~");

/*
2.) Find all items with a `backorder` availability in `inventories`.
//items -> availability -> backorder
*/

countBackOrder = 0;
for (i = 0; i < data.items.length; i ++) {
	 if (data.items[i].product.inventories[0].availability === "backorder") {
	 	countBackOrder = countBackOrder + 1;
	 }
}

console.log(countBackOrder + " products are in backorder.");
console.log("~~~~~~~~~~~~~~~~~~~~");

 /*
3.) Find all items with more than one image link.
 */

countImages = 0;
for (i = 0; i < data.items.length; i ++) {
	 if (data.items[i].product.images.length > 1) {
	 	countImages = countImages + 1;
	 }
}

console.log(countImages + " items have more than one image.")
console.log("~~~~~~~~~~~~~~~~~~~~");

/*
4.) Find all `canon` products in the items (careful with case sensitivity).
*/

countCanon = 0;

for (i = 0; i < data.items.length; i ++) {
	 if (data.items[i].product.brand === "Canon") {
	 	countCanon = countCanon + 1;
	 }
}
console.log("There are " + countCanon + " Canon products in the items list.")
console.log("~~~~~~~~~~~~~~~~~~~~");

/*
5.) Find all `items` that have 
**product** **author** **name**
of "eBay" and are brand "Canon".
*/

counteBayCanon = 0;

for (i = 0; i < data.items.length; i ++) {
	 if (data.items[i].product.author.name.indexOf("eBay") != -1 && data.items[i].product.brand === "Canon") {
	 	counteBayCanon = counteBayCanon + 1;
	 }
}

console.log("There are " + counteBayCanon + " items sold by eBay with the brand Canon.")
console.log("~~~~~~~~~~~~~~~~~~~~");

/*
6.) Print all the products with their **brand**,
**price**, and a **image link**
*/

for (i = 0; i < data.items.length; i ++) {
	console.log("Brand: " + (data.items[i].product.brand));
	console.log("Price: " + (data.items[i].product.inventories[0].price));
	console.log("Image link: " + (data.items[i].product.images[0].link));
	console.log("-----");
}