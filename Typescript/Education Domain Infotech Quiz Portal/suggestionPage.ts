var suggestionList: string[] = [];
var identification: any = "Anonymous";

function final() {
    let result = `Your performance is <span class="text-danger">${localStorage.performanceDetails}</span>, based on your scores. 
    Please do fill up the details mentioned below.`;
    document.getElementById("performance").innerHTML = result;
}

function storeVal(val: string) {
    if (val.trim()) identification = val;
}

function addSuggestion() {
    let suggestion = (<HTMLInputElement>document.getElementById("suggestion")).value.trim();
    suggestionList.push(suggestion);
    done(identification, suggestion);
}

function done(...feedback: any[]) {
    let finalStatement = `<pre class="alert alert-success"><strong>Employee Name or Id:</strong> <span class="text-danger">${feedback[0]}</span>
<strong>Suggestions:</strong><span class="text-danger"> ${feedback[1] ? feedback[1] : "None"}</span>
                        <strong>Thank You for using the app!</strong></pre>`;
    document.getElementById("final").innerHTML = finalStatement;
}
