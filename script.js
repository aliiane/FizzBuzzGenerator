// Event listeners for the Generate and Clear buttons
document.getElementById('generate').addEventListener('click', generateDivs);
document.getElementById('clear').addEventListener('click', clearDivs);

// Function to generate the FizzBuzz divs
function generateDivs() {
    clearDivs(); // Clear any existing divs

    const main = document.getElementById('main');
    const startValue = parseInt(document.getElementById('startValue').value);
    const endValue = parseInt(document.getElementById('endValue').value);
    const fizzValue = parseInt(document.getElementById('fizzValue').value);
    const buzzValue = parseInt(document.getElementById('buzzValue').value);

    // Validation checks for user input
    if (isNaN(startValue) || isNaN(endValue) || isNaN(fizzValue) || isNaN(buzzValue)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    if (startValue > endValue) {
        alert('Start value should be less than or equal to end value.');
        return;
    }

    // Loop through the range and create divs based on FizzBuzz logic
    for (let i = startValue; i <= endValue; i++) {
        const div = document.createElement('div');
        div.id = `myid${i}`;

        // Assign appropriate class and text based on the FizzBuzz rules
        if (i % fizzValue === 0 && i % buzzValue === 0) {
            div.className = 'fizzbuzz';
            div.innerText = 'FizzBuzz';
        } else if (i % fizzValue === 0) {
            div.className = 'fizz';
            div.innerText = 'Fizz';
        } else if (i % buzzValue === 0) {
            div.className = 'buzz';
            div.innerText = 'Buzz';
        } else {
            div.className = 'number';
            div.innerText = i;
        }

        // Append the div to the main container
        main.appendChild(div);

        // Animate the div for a nicer visual effect
        setTimeout(() => {
            div.style.opacity = 1;
            div.style.transform = 'translateY(0)';
        }, 50 * (i - startValue)); // Stagger the animation
    }
}

// Function to clear all generated divs
function clearDivs() {
    const main = document.getElementById('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}
