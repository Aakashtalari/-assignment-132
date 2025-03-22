
/* moveImage.js JavaScript to move image*/
var dom, x, y, finalx = 700;
// function to initialize the x and y coordinates of the current position of the image to move

function initImage() {
dom = document.getElementById('image').style;
/* Get the current position of the image and covert string values of lef and topto numbers */
var x = parseInt(dom.left);
var y = parseInt(dom.top);
/* Call the function that moves it */
moveImage(x, y);
}
// A function to move the image from its original  position to (x, finalx)
function moveImage(x, y) {
/* If the x coordinates are not equal, move
x toward finalx */

if ((x != finalx) ) {
x++;
// assign x and y values to propeties to cause the move
dom.left = x + "px";
dom.top = y + "px";
/* Recursive call, after a 1-millisecond delay */
setTimeout("moveImage(" + x + "," + y + ")", 1);
}
}



