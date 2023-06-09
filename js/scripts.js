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
    let num = ipt.trim();
    if (!num.length || !num.match(/\d+/g))
        return 0;
    num = parseInt(num.match(/\d+/g).join(''));
    if (num < 0)
        num = 0;
    if (num > 400000000000)
        num = 400000000000;
    return num;
}

/**
 * Produces a list of neighbors presented as strings
 * - Replace neighbors containing 1 with Beep!
 * - Replace neighbors containing 2 with Boop!
 * - Replace neighbors containing 3 with Won't you be my neighbor?
 * @param {Number} num 
 * @returns {String[]} list of neighbors
 */
function createNeighbors(num) {
    if (num <= 0)
        return [];
    const neighbors = [];
    for (let i = 0; i <= num; i++) {
        let n = String(i).slice();
        const iStr = String(i).slice();
        if (iStr.includes('1'))
            n = "Beep!"
        if (iStr.includes('2'))
            n = "Boop!"
        if (iStr.includes('3'))
            n = "Won't you be my neighbor?"
        neighbors.push(n)
    }
    return neighbors;
}

/**
 * Generates a string of inner html from a list
 * Each list item is contained in its own span
 * @param {String[]} list 
 * @returns {String} 
 */
function generateNeighborhoodList(list) {
    return list.reduce((acc, val) => acc += '<span>' + val + '</span>', "");
}

/* USER INTERFACE LOGIC */

/**
 * Retrieves data from inputs
 * Sends data to be processed
 * Displays data in #roboger-list element
 */
function handleFormSubmission(e) {
    e.preventDefault();
    const ipt = document.querySelector('#number-ipt');
    const num = parseUserNumber(ipt.value);
    document.querySelector('#roboger-list').innerHTML = generateNeighborhoodList(createNeighbors(num));
}

window.onload = () => {
    console.log('Enter listFunctions()');

    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmission);
}