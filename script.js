window.onload = function(){

    var canvasWidth = 510;
    var canvasHeight = 510;
    var Blocksize = 30;
    var ctx;
    var delay = 80;
    var snakey;
    var appley;
    var widthinBlocks = canvasWidth/Blocksize;
    var heightinBlocks = canvasHeight/Blocksize;
    var score;
    var record = 0;
    var centreX = canvasWidth / 2;
    var centreY = canvasHeight / 2;
    var timeout;

    init();

    function init(){
        var game = document.getElementById("snakey");
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        game.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakey = new Snake([[6,4],[5,4],[4,4]], "right");
        var newX = Math.round(Math.random() * (widthinBlocks - 1));
        var newY = Math.round(Math.random() * (heightinBlocks - 1));
        var new_position = [newX, newY];
        appley = new Apple(new_position);
        score = 0;
        refreshCanvas();
    }
}