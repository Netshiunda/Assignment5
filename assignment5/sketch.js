function setup() {
    createCanvas(500, 500);
    background(255);
  }
  
  function draw() {
    background(255);
  
    var noOfDots = 20;
    var size = width / noOfDots;
  
    for (var x = 0; x < noOfDots; x++) {
      for (var y = 0; y < noOfDots; y++) {
        var posX = size * x + size / 2; // Calculate the x position of the dot
        var posY = size * y + size / 2; // Calculate the y position of the dot
        var dotSize = size / 2; // Calculate the size of the dot (half the size)
  
        var scaledX = x * 0.1;
        var scaledY = y * 0.1;
        var noiseVal = noise(scaledX, scaledY, frameCount * 0.05); // Generate noise value based on grid position and frameCount
  
        var phaseAngle = map(noiseVal, 0, 1, 0, TWO_PI); // Map the noise value to a phase angle (0 to 2π)
  
        wave(posX, posY, dotSize, phaseAngle); // Call the wave() function with the necessary parameters
      }
    }
  }
  
  function wave(x, y, dotSize, phaseAngle) {
    push(); // Save the current transformation state
  
    translate(x, y); // Move the origin to the center of the dot
    rotate(phaseAngle); // Rotate based on the phase angle
  
    // Draw the dot
    noStroke();
    fill(0);
    ellipse(0, 0, dotSize, dotSize);
  
    pop(); // Restore the previous transformation state
  }
  