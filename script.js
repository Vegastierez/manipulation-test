// Initialize the scores for each point type
let empScore = 0;
let rmpScore = 0;
let smpScore = 0;
let umpScore = 0;

// Function to calculate the score based on selected answers
function calculateScore() {
    // Reset scores
    empScore = 0;
    rmpScore = 0;
    smpScore = 0;
    umpScore = 0;

    // Get all the selected answers
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    // Loop through the answers and add points accordingly
    answers.forEach(answer => {
        const values = answer.value.split(", ");
        values.forEach(value => {
            const [pointType, points] = value.split("-");
            if (pointType === "EMP") empScore += parseInt(points);
            if (pointType === "RMP") rmpScore += parseInt(points);
            if (pointType === "SMP") smpScore += parseInt(points);
            if (pointType === "UMP") umpScore += parseInt(points);
        });
    });

    // Display the result
    displayResult();
}

// Function to display the result based on scores
function displayResult() {
    let resultText = `
        <h2>Your Results:</h2>
        <p><strong>EMP (Emotional Manipulation Potential):</strong> ${empScore}</p>
        <p><strong>RMP (Relational Manipulation Potential):</strong> ${rmpScore}</p>
        <p><strong>SMP (Social Manipulation Potential):</strong> ${smpScore}</p>
        <p><strong>UMP (Universal Manipulation Potential):</strong> ${umpScore}</p>
    `;

    // Customize roles based on the score thresholds
    if (empScore > 20 && rmpScore > 20) {
        resultText += "<p>You have a high potential for manipulative behaviors.</p>";
    } else if (empScore < 10 && rmpScore < 10) {
        resultText += "<p>Your manipulative behaviors are less pronounced.</p>";
    } else {
        resultText += "<p>You are in the moderate range.</p>";
    }

    // Show the result on the page
    document.getElementById('result').innerHTML = resultText;
}
