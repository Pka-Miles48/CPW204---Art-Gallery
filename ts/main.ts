/**
 *  Represents an individual painting that can be purchased
 */
class Painting {
    /**
     * The 5 digit inventory number
     */
    inventorynumbers : string;

    /**
     * The 5 digit global ID
     */
    globalIDs : string;

    /**
     * The name of the artwork archive
     */
    artworkarchive : string;

    /**
     * The retail price of the painting
     */
    price : number;

    /**
     * The title of the painting
     */
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