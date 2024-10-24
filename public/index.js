document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("home");
    const radioButtons = document.querySelectorAll('input[name="color"]');
    const h2Element = document.querySelector('h2'); // Get the <h2> element
    const arButton = document.querySelector('.ar-button'); // Get the AR button
  
    // Function to update body class, h2 text, and AR button href based on selected radio button
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
                    arButton.href = "./shoes/shoes.html?sneaker=lemon-surge"; // Update href
                    break;
                case 'crimson-wave':
                    h2Element.textContent = "CRIMSON WAVE";
                    arButton.href = "./shoes/shoes.html?sneaker=crimson-wave"; // Update href
                    break;
                case 'sunset-rush':
                    h2Element.textContent = "SUNSET RUSH";
                    arButton.href = "./shoes/shoes.html?sneaker=sunset-rush"; // Update href
                    break;
            }
        }
    };
  
    // Set the initial body class, h2 text, and AR button href based on the default checked radio button
    updateBodyClassAndText();
  
    // Add event listeners to radio buttons
    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateBodyClassAndText);
    });
  });
  