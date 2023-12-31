var colorSchemes = [
    [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)], // Red, Green, Blue
    [color(255, 255, 0), color(255, 0, 255), color(0, 255, 255)], // Yellow, Magenta, Cyan
    [color(255, 128, 0), color(128, 255, 0), color(0, 128, 255)], // Orange, Lime, Blue
  ];
  
  var currentColorSchemeIndex = 0;
  
  function keyPressed() {
    if (key === '1') {
      currentColorSchemeIndex = 0;
    } else if (key === '2') {
      currentColorSchemeIndex = 1;
    } else if (key === '3') {
      currentColorSchemeIndex = 2;
    }
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
  
        var scaledX = posX * 0.1;
        var scaledY = posY * 0.1;
        var noiseVal = noise(scaledX, scaledY, frameCount * 0.05); // Generate noise value based on grid position and frameCount
  
        var phaseAngle = map(noiseVal, 0, 1, 0, TWO_PI); // Map the noise value to a phase angle (0 to 2π)
        phaseAngle += mouseX * 0.01; // Add mouseX to the phase angle to create variable phase
  
        var colorScheme = colorSchemes[currentColorSchemeIndex];
        var fillColor = colorScheme[Math.floor(noiseVal * colorScheme.length)];
  
        wave(posX, posY, dotSize, phaseAngle, fillColor); // Call the wave() function with the necessary parameters
      }
    }
  }
  
  function wave(x, y, dotSize, phaseAngle, fillColor) {
    push(); // Save the current transformation state
  
    translate(x, y); // Move the origin to the center of the dot
    rotate(phaseAngle); // Rotate based on the phase angle
  
    // Draw the dot
    noStroke();
    fill(fillColor);
    ellipse(0, 0, dotSize, dotSize);
  
    pop(); // Restore the previous transformation state
  }
  