let html = '';
/**
 * function that out puts a random number
 * between 0 to 256 it's for the rgb numbers to be chosen 
 * randomly 
 * @returns used both Math floor and math random methods
 *  for the calculation
 */
const randomValue = () => Math.floor(Math.random() * 256);
/**
 * this function holds the rgb colors to use 
 * i called the value in the parameter which it's arguments
 * is the randomValue which gives a random number
 * for the 3 rgb colors to be picked 
 * @returns 
 */
function RGB(value) {
const color = `rgb(${value()}, ${value()}, ${value()})`;
return color;
}

 for (let i = 1; i <= 12; i++){

html += `<div style="background-color: ${RGB(randomValue)}">${i}</div>`;
 }
document.querySelector('main').innerHTML = html;