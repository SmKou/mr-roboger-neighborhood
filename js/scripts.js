/* BUSINESS LOGIC */

/**
 * Checks user-provided string and returns the parsed number
 * Removes any non-numeric characters
 * Sets to maximum if higher than 400000000000
 * Sets to minimum if lower than 0
 * @param {String} ipt 
 * @returns {Number}
 */
function parseUserNumber(ipt) {
    return;
}

/**
 * Produces a list of neighbors presented as numbers or strings
 * - Replace neighbors containing 1 with Beep!
 * - Replace neighbors containing 2 with Boop!
 * - Replace neighbors containing 3 with Won't you be my neighbor?
 * @param {Number} num 
 * @returns {String[]} list of neighbors
 */
function createNeighbors(num) {
    return;
}

/**
 * Generates a string of inner html from a list
 * Each list item is contained in its own span
 * @param {String[]} list 
 * @returns {String} 
 */
function generateNeighborhoodList(list) {
    return;
}

/* USER INTERFACE LOGIC */

/**
 * Retrieves data from inputs
 * Sends data to be processed
 * Displays data in #roboger-list element
 */
function handleFormSubmission() { 
    const num = parseUserNumber(document.querySelector('#number-ipt').value);
    document.querySelector('#roboger-list').innerHTML = generateNeighborhoodList(createNeighbors(num));
}

window.onload = () => {
    console.log('Enter listFunctions()');

    const form = document.querySelector('form');
    form.addEventListener(submit, handleFormSubmission);
}