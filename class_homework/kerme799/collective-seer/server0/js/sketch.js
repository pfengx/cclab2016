// Video Capture: p5 example
// Face Detection: https://kylemcdonald.github.io/cv-examples/FaceDetection/sketch.js
// Drag and Drop: https://github.com/processing/p5.js-website-OLD/pull/80/commits/8a08568e7a147d03e32eb2ec6afe5281e7dee674

var button;
var record;
var img;
var capture;

// function preload() {
//     img = loadImage("/style/assets/clouds.jpg");
//     // img.position(200,200);
// }


function setup() {
    // background(0);
    var canvas = createCanvas(480, 640);
    canvas.parent('sketch-container');
    // position relative to entire page
    // canvas.position(0,0);
    // canvas.drop(gotFile);
    
    // right
    capture = createCapture(VIDEO);
    capture.parent('camera-container');
    capture.size(640,480);
    // capture.position(50,150);
    // capture.hide();
    
    button = createButton('ciel');
    button.position(100,100);
    button.mousePressed(takesnap);
    record = createButton('save');
    record.position(100,120);
    record.mousePressed(recorded);
    // image(img, 0, 0);
    // filter(OPAQUE, 0.5);

}
// h1.html under mousePressed function can change the h1 content

function draw() {
    // tint(255,50);
    // fill(150);
    noStroke();
    noLoop();


// what's drawn on canvas - position is relative to canvas (versus dom)

}

// function mousePressed() {
//     // boolean, target id of image div, change visibility
//     // putting elements in array
//     // 
//     image(img,0,0);

//     console.log("click");

// }
    // console.log("click");
    // var change = document.getElementById("ciel"); 
    // // console.log(change);
    // if(change.style.opacity == 1) {
    //     change.style.opacity = 0;
    //     console.log(change.style.opacity);
    // } else{
    //     change.style.opacity = 1;
    //     console.log(change.style.opacity);
    // }

    // for (var i = 0; i > change.length; i++) {

    //     if(change[i].style.opacity = 1) {
    //         change[i].style.opacity = 0;
    //         console.log("opacity = 0");
    //     } else{
    //         change[i].style.opacity = 1;
    //         console.log("opacity = 0");
    //     }
    // };



// function gotFile(file) {
//     if(file.type === 'image'){
//         var img = createImg(file.data).hide();
//         image(img, 0, 0, width, height);
//     } else {
//         println('Not an image');

//     }
// }

function takesnap() {
    image(capture,0,0);
}

function recorded() {
    save();

}
