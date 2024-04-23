/**
 *  Represents an individual painting that can be purchased
 */
class Painting {
    inventorynumbers : string;
    globalIDs : string;
    artworkarchive : string;
    price : number;
    title : string;
}

// Painting object test code
let myPainting = new Painting();
myPainting.inventorynumbers = "48L08";
myPainting.globalIDs = "DW284";
myPainting.artworkarchive = "Schedule Feature"
myPainting.price = 28.99;
myPainting.title = "The Art of Programming for Novices"

console.log(myPainting);