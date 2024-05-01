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
 * is invalid, null will be returned and error messages
 * will be shown on the web page.
 */
function getPainting():Painting {
    // Get all inputs
    let inventorynumbersTextBox = document.querySelector("#inventory-numbers") as HTMLInputElement;
    let globalIDsTextBox = document.querySelector("#global-ids") as HTMLInputElement;
    let artworkarchiveTextBox = document.querySelector("artwork-archive") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;

    // Validate data
    let isValidData:boolean = true;

    // Validate the Inventory Numbers
    let inventorynumbers = inventorynumbersTextBox.value;
    if (isValidInventoryNumbers(inventorynumbers)) {
        isValidData = false;
        inventorynumbersTextBox.nextElementSibling.textContent = "The inventory number must represent the last two digits of the year and then define a category or type of work";
    }

    // Validate the Global IDs
    function isValidGlobalId(id: string): boolean {
        // A simple regex for validation
        const regex = /^[a-zA-Z0-9-_]+$/;
        return regex.test(id);
    }
    
    // Usage
    const id: string = "yourGlobalId";
    if(isValidGlobalId(id)) {
        console.log("Valid Global ID");
        isValidData = false;
        inventorynumbersTextBox.nextElementSibling.textContent = "You must enter a 5 digit global ID";
    } else {
        console.log("Invalid Global ID");
    }
    
}

/**
 * This validates an inventory number..
 * @param n The string to be validated
 * @returns True if n is a valid inventory number
 */
function isValidInventoryNumbers(n) {
    return typeof n === 'number' && !isNaN(n) && isFinite(n);
}

/**
 * Adds a Painting object to web storage. Assumes
 * all data is valid
 * @param b The Painting containing valid data to be added
 */
function addPainting(b:Painting):void{

}