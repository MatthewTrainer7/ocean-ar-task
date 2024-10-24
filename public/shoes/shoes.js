document.addEventListener("DOMContentLoaded", () => {
  const gesturePrompt = document.querySelector('.gesture-prompt');
  const homeButton = document.querySelector('.home-button');
  const colourPickerContainer = document.querySelector('.colour-picker-container');
  const scanPrompt = document.querySelector('.scan-prompt');

  const sneaker1Model = document.getElementById('sneaker1Model');
  const sneaker2Model = document.getElementById('sneaker2Model');
  const sneaker3Model = document.getElementById('sneaker3Model');
  
  const radioButtons = document.querySelectorAll('input[name="color"]');
  const marker = document.getElementById('marker');

  // Hide gesture prompt, home button, and colour picker on load
  gesturePrompt.style.display = 'none';
  // homeButton.style.display = 'none';
  colourPickerContainer.style.display = 'none';

  // Function to set the active radio button and display the corresponding model
  const setActiveModel = (color) => {
    sneaker1Model.setAttribute('visible', color === 'lemon-surge');
    sneaker2Model.setAttribute('visible', color === 'crimson-wave');
    sneaker3Model.setAttribute('visible', color === 'sunset-rush');
  };

  // Function to get query parameter from URL
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Set active radio button based on URL query param
  const sneakerColor = getQueryParam('sneaker');
  if (sneakerColor) {
    const selectedRadio = document.querySelector(`input[value="${sneakerColor}"]`);
    if (selectedRadio) {
      selectedRadio.checked = true;
      setActiveModel(sneakerColor);  // Set the corresponding model to visible
    }
  }

  // Add event listeners to radio buttons to change model when the radio button changes
  radioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
      setActiveModel(e.target.value);
    });
  });

  // When the marker is found, show the gesture prompt, home button, and colour picker, and hide scan prompt
  marker.addEventListener('markerFound', () => {
    scanPrompt.style.display = 'none';
    gesturePrompt.style.display = 'flex';
    // homeButton.style.display = 'block';
    colourPickerContainer.style.display = 'flex';
  });

  // When the marker is lost, show the scan prompt again
  marker.addEventListener('markerLost', () => {
    scanPrompt.style.display = 'block';
    gesturePrompt.style.display = 'none';
    // homeButton.style.display = 'none';
    colourPickerContainer.style.display = 'none';
  });
});
