const sneaker1Model = document.querySelector('#sneaker1Model');
const sneaker2Model = document.querySelector('#sneaker2Model');
const sneaker3Model = document.querySelector('#sneaker3Model');

// Store original properties
const originalProperties = {
  sneaker1: { position: '0 0 0', rotation: '0 90 0', scale: '5 5 5' },
  sneaker2: { position: '0 0 0', rotation: '0 90 0', scale: '5 5 5' },
  sneaker3: { position: '0 0 0', rotation: '0 90 0', scale: '5 5 5' }
};

// Function to show the selected sneaker and hide the others
function showSneaker(selectedModel) {
  sneaker1Model.setAttribute('visible', false);
  sneaker2Model.setAttribute('visible', false);
  sneaker3Model.setAttribute('visible', false);
  selectedModel.setAttribute('visible', true);
}

// Reset function to restore original properties
function resetPosition() {
  sneaker1Model.setAttribute('position', originalProperties.sneaker1.position);
  sneaker1Model.setAttribute('rotation', originalProperties.sneaker1.rotation);
  sneaker1Model.setAttribute('scale', originalProperties.sneaker1.scale);
  
  sneaker2Model.setAttribute('position', originalProperties.sneaker2.position);
  sneaker2Model.setAttribute('rotation', originalProperties.sneaker2.rotation);
  sneaker2Model.setAttribute('scale', originalProperties.sneaker2.scale);

  sneaker3Model.setAttribute('position', originalProperties.sneaker3.position);
  sneaker3Model.setAttribute('rotation', originalProperties.sneaker3.rotation);
  sneaker3Model.setAttribute('scale', originalProperties.sneaker3.scale);
}

// Add event listeners to the buttons
document.getElementById('sneaker1').addEventListener('click', () => showSneaker(sneaker1Model)); // Yellow Green
document.getElementById('sneaker2').addEventListener('click', () => showSneaker(sneaker2Model)); // Red Blue
document.getElementById('sneaker3').addEventListener('click', () => showSneaker(sneaker3Model)); // Blue Orange
document.getElementById('reset').addEventListener('click', resetPosition); // Reset

// Log marker events to check tracking
const marker = document.querySelector('#marker');
marker.addEventListener('markerFound', () => console.log('Marker found'));
marker.addEventListener('markerLost', () => console.log('Marker lost'));