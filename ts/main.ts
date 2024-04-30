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


window.onload = function() {
    // set up button click for add painting form
    let addPaintingBtn = document.querySelector("#add-painting") as HTMLButtonElement;
    addPaintingBtn.onclick = processPainting;
}

function processPainting() {
    console.log("processPainting was called")

    let userPainting = getPainting();
    if (userPainting !=null) {
        addPainting(userPainting);
    }
}

/**
 * This function will retrieve all the painting
 * data from the HTML page. If all data is valid
 * a painting project will be returned. If any data
 * is invalid, null will be returned.
 */
function getPainting():Painting {
    
}

/**
 * Adds a Painting object to web storage. Assumes
 * all data is valid
 * @param b The Painting containing valid data to be added
 */
function addPainting(b:Painting):void{

}