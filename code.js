var bSize = 56;
var bLeng = bSize * 1.5;
var xPos = [];
var reps = 20; //horizontal repititions
var leng = ceil(bSize / 400); // vertical repititions
var start = -bLeng +10;
var c1 = new Array(reps);
var c2 = new Array(reps);
var c3 = new Array(reps);

for (var t = 0; t < reps + 1; t++) {
    c1[t] = new Array(leng);
    c2[t] = new Array(leng);
    c3[t] = new Array(leng);
}

//color and position for each individual line
for (var d = 0; d < reps; d++) {
    var t = d * bSize;
    xPos.push(t);
    //color for each shape
    for (var c = 0; c <= leng + 5; c++) {
        c1[d][c] = random(0, 255);
        c2[d][c] = random(0, 255);
        c3[d][c] = random(0, 255);
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
            fill(c1[i][l], c2[i][l], c3[i][l]);
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
for (var i = 0; i <=c1.length; i++) {
println(c1[i]);
}
