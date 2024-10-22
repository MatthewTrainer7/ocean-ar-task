document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("home");
  const radioButtons = document.querySelectorAll('input[name="color"]');
  const h2Element = document.querySelector('h2'); // Get the <h2> element

  // Function to update body class and h2 text based on selected radio button
  const updateBodyClassAndText = () => {
      // Remove all color classes
      body.classList.remove('lemon-surge', 'crimson-wave', 'sunset-rush');

      // Get the selected radio button
      const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
      
      if (selectedRadio) {
          // Add class based on selected radio button
          body.classList.add(selectedRadio.value);

          // Change h2 text based on the selected radio button
          switch (selectedRadio.value) {
              case 'lemon-surge':
                  h2Element.textContent = "LEMON SURGE";
                  break;
              case 'crimson-wave':
                  h2Element.textContent = "CRIMSON WAVE";
                  break;
              case 'sunset-rush':
                  h2Element.textContent = "SUNSET RUSH";
                  break;
          }
      }
  };

  // Set the initial body class and h2 text based on the default checked radio button
  updateBodyClassAndText();

  // Add event listeners to radio buttons
  radioButtons.forEach(radio => {
      radio.addEventListener('change', updateBodyClassAndText);
  });
});
