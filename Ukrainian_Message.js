var Flag = function() {
noStroke();

background(247, 255, 0);

fill(0, 196, 255);
rect(0, 0, 399, 199.5);
};

var Message = function() {
fill(247, 255, 0);
textSize(50);
text("Go", 160, 120);

fill(0, 196, 255);
textSize(50);
text("Ukraine!!", 102, 320);
};

Flag();
Message();
