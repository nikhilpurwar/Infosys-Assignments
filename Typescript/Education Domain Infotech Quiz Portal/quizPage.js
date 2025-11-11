"use strict";

// Enum-like object to map score to performance level
var performance = {
    0: "Needs Improvement",
    25: "Good",
    35: "Very Good",
    50: "Excellent"
};

// Page class with scoring logic
function Page() {
    this.score = 0;
}

Page.prototype.submit = function () {
    // Check each correct answer using its ID
    if (document.getElementById("a1")?.checked) this.score += 10;
    if (document.getElementById("a2")?.checked) this.score += 10;
    if (document.getElementById("a3")?.checked) this.score += 10;
    if (document.getElementById("a4")?.checked) this.score += 10;
    if (document.getElementById("a5")?.checked) this.score += 10;

    // Map score to performance string
    let resultText = performance[this.score] || "Undefined";

    // Save result in localStorage for next page
    localStorage.setItem("performanceDetails", resultText);

    // Display score and next step
    let resHTML = `<span class="alert alert-success">
        Your score is ${this.score}! 
        
        <a class="btn btn-success" href="SuggestionPage.html">Click here to Proceed</a>
    </span>`;

    document.getElementById("result").innerHTML = resHTML;
};

// Function called on Submit button click
function invokeSubmit() {
    var pageObject = new Page();
    pageObject.submit();
}
