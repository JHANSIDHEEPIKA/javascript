// Get elements
        const counterDisplay = document.getElementById('counter');
        const valueInput = document.getElementById('valueInput');
        const addButton = document.getElementById('btn-1');
        const subtractButton = document.getElementById('btn-2');
        let counterValue = 0;

        // Update counter display
        function updateCounterDisplay() {
            counterDisplay.textContent = counterValue;
        }

        // Function to add value
        addButton.addEventListener('click', () => {
            const inputValue = parseInt(valueInput.value) || 0;
            counterValue += inputValue;
            updateCounterDisplay();
            changeBackgroundColor();
        });

        // Function to subtract value
        subtractButton.addEventListener('click', () => {
            const inputValue = parseInt(valueInput.value) || 0;
            counterValue -= inputValue;
            updateCounterDisplay();
            changeBackgroundColor();
        });

        // Function to change background color
        function changeBackgroundColor() {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        }

        
