var suggestionList = [];
var identification = "Anonymous";
function final() {
    var result = "Your performance is <span class=\"text-danger\">".concat(localStorage.performanceDetails, "</span>, based on your scores. \n    Please do fill up the details mentioned below.");
    document.getElementById("performance").innerHTML = result;
}
function storeVal(val) {
    if (val.trim())
        identification = val;
}
function addSuggestion() {
    var suggestion = document.getElementById("suggestion").value.trim();
    suggestionList.push(suggestion);
    done(identification, suggestion);
}
function done() {
    var feedback = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        feedback[_i] = arguments[_i];
    }
    var finalStatement = "<pre class=\"alert alert-success\"><strong>Employee Name or Id:</strong> <span class=\"text-danger\">".concat(feedback[0], "</span>\n<strong>Suggestions:</strong><span class=\"text-danger\"> ").concat(feedback[1] ? feedback[1] : "None", "</span>\n                        <strong>Thank You for using the app!</strong></pre>");
    document.getElementById("final").innerHTML = finalStatement;
}
