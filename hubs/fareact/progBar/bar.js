document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    const currentMilestone = 5; // Example: animate to 50%

    setTimeout(() => {
        progressBar.style.width = `${currentMilestone}%`;
    }, 100); // Small delay to ensure the transition is visible
});


// Other stuff entirely

document.addEventListener('DOMContentLoaded', function() {
    function animateValue(rand, start, end, duration, letter, finalText) {
        const obj = document.getElementById(rand);
        let startTime = null;

        // The animation step function
        function animationStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Linearly interpolate the current value based on the progress
            const currentValue = Math.floor(start + (end - start) * progress);

            obj.innerHTML = '$' + currentValue + letter;

            if (progress < 1) {
                window.requestAnimationFrame(animationStep);
            } else {
                obj.innerHTML = finalText; // Set the final value
            }
        }

        window.requestAnimationFrame(animationStep);
    }

    // Example usage
    animateValue("rand1", 0, 2500, 3000, "", "$2-10k");
    animateValue("rand3", 0, 999, 3000, "M", "$1B");
});

document.addEventListener('DOMContentLoaded', function() {
    function animateScrambledText(id, finalText, duration) {
        const obj = document.getElementById(id);
        let startTime = null;

        // Function to generate a random lowercase letter
        const randomLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        // Function to generate a random uppercase letter
        const randomCapitalLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        // Animation step function
        function animationStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const progress = elapsedTime / duration;

            if (progress < 1) {
                // Generate scrambled text with the first letter capitalized
                let scrambled = randomCapitalLetter(); // First letter capitalized for the city
                for (let i = 1; i < 5; i++) { // Next four letters lowercase for the city
                    scrambled += randomLetter();
                }
                scrambled += ', ';
                for (let i = 0; i < 2; i++) { // Two uppercase letters for the state
                    scrambled += randomCapitalLetter();
                }
                obj.innerHTML = scrambled;

                window.requestAnimationFrame(animationStep);
            } else {
                // Reveal the final text
                obj.innerHTML = finalText;
            }
        }

        window.requestAnimationFrame(animationStep);
    }

    // Example usage
    animateScrambledText("rand2", "Miami, FL", 3000); // Scramble for 3 seconds before revealing "Miami, FL"
    animateScrambledText("rand2b", "San Francisco, CA", 3000); // Scramble for 3 seconds before revealing "Miami, FL"
});






