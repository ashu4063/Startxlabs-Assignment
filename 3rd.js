//3rd Assignment
const Assign3 = document.getElementById('varLengthSubmit');
Assign3.addEventListener('click', submittedVar)
const addVars = document.getElementById('varSubmit')
addVars.addEventListener('click', addVariables)

var vars;
var variables = []
function submittedVar() {
    vars = document.getElementById("noOfVars").value;
    if (vars === undefined || vars === "") {
        alert("Add number of variables")
    } else {
        document.getElementById('addedValues').innerHTML = "Add " + vars + " strings"
    }
}

function addVariables() {
    if (vars === undefined || vars === "") {
        alert("Add number of variables")
    }
    else {
        var item = document.getElementById('variables').value;
        variables.push(item)
        document.getElementById('variables').value = "";
        if (vars == variables.length) {

            var sorted = variables.sort();
            document.getElementById('printVariables').innerHTML = sorted.toString()
        }
    }
}