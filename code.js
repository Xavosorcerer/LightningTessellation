var bSize = 56;
var bLeng = bSize * 1.5;
var xPos = [];
var c1 = [[], [], [],];
var c2 = [];
var c3 = [];
var reps = 20;
var start = -bLeng +10;

//each individual line
for (var d = 0; d < reps; d++) {
    var t = d * bSize;
    xPos.push(t);
    for (var c = 0; c <= 1 +(bSize / 400); c++) {
        c1.push(random(0,255));
        c2.push(random(0,255));
        c3.push(random(0,255));
    }
}


draw = function() {
    //background(255, 255, 255);
    //for the lines
    for (var i = reps; i >= 0; i-= 1) {
        //for the individual blocks
        for (var l = 0; l <= (400 / bSize) + 1; l++) {
            var x = xPos[i];
            var y = l * bSize;
            fill(c1[i], c2[i], c3[i]);
            noStroke();
            rect(x, y, bSize, bSize);
            triangle(x + bSize, y, x + bSize * 1.5, y + bSize * 0.5, x + bSize, y + bSize);
            triangle(x, y, x + bSize * 1.54, y - bSize * 0.5, x + bSize, y);
            xPos[i]+= 0.5;
            if (xPos[i] >= 1102/*bSize * (reps + 1) + start*/) {
                xPos[i] = start;
            }
        }
    }
    /*var ghgh = reps;
    fill(c1[ghgh], c2[ghgh], c3[ghgh]);
    rect(200, 200, 20, 20);*/
    
};
