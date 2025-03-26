const svgNS = "http://www.w3.org/2000/svg";
const logoPath = document.getElementById('logoPath');
const textPath = document.getElementById('textPath');
const waveContainer = document.getElementById('waveContainer');

// Universal function to create a wave path following any given SVG path element
function createWavePath(pathElement) {
    // Clone the given path to create the wave effect
    const wavePath = document.createElementNS(svgNS, 'path');
    wavePath.setAttribute('d', pathElement.getAttribute('d'));
    wavePath.setAttribute('class', 'wave');

    return wavePath;
}

// Function to emit continuous waves for a given path
function emitWaves(pathElement) {
    setInterval(() => {
        // Create a wave path for the provided path element (logo or text)
        const wavePath = createWavePath(pathElement);
        waveContainer.appendChild(wavePath);

        // Remove the wave after the animation ends (5 seconds)
        setTimeout(() => {
            waveContainer.removeChild(wavePath);
        }, 5000); // Duration of the wave animation
    }, 1000); // Emit a new wave every 1 second
}

// Start emitting waves separately for the logo and the text
emitWaves(logoPath); // For the logo
emitWaves(textPath);  // For the text


