var alphabet = "English";
var name = "";

//  get canvas object
var canvas = document.getElementById("myCanvas");
if (canvas.getContext) {
    //  get rendering context
    var ctx = canvas.getContext("2d");


    var gradArray = ["red", "purple", "blue", "green", "yellow", "orange"];
    var gradient;
    var temp;

    doGradient();  // get an initial color set on the screen

    function doGradient() {
        //create a gradient object from the canvas context
        gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

        // Add the colors with fixed stops at 1/5 of the width.
        gradient.addColorStop("0", gradArray[0]);
        gradient.addColorStop(".20", gradArray[1]);
        gradient.addColorStop(".40", gradArray[2]);
        gradient.addColorStop(".60", gradArray[3]);
        gradient.addColorStop(".80", gradArray[4]);
        gradient.addColorStop("1.0", gradArray[5]);

        // Use the gradient.
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 250);
        ctx.fillRect(250, 300, 600, 500);
    }


    // ctx.fillStyle = "red";
    // ctx.fillRect(5, 5, 200, 200);
    // ctx.fillStyle = "rgba(0,50,200,0.5)";
    // ctx.fillRect(55, 55, 200, 200);
    // ctx.fillStyle = "rgba(0,255,10,0.5)";
    // ctx.fillRect(100, 100, 200, 200);
}