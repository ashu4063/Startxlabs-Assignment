//2nd Assignment
const Assign2 = document.getElementById('tc-submit');
const XOR = document.getElementById('xor-submit')

var inputs;
function addInputs() {
    inputs = document.getElementById("testcase").value;
    if (inputs === "") {
        alert("Please add number of required testcases")
    }
    else {
        document.getElementById('testcases-input').innerHTML = "Add Values for " + inputs + " testcases"
    }
}
var result = [];
var l = [];
var r = [];
function addRange() {
    if (inputs === "" || inputs === undefined) {
        alert("Please add number of required testcases")
    }
    else {
        var item1 = document.getElementById("l").value;
        var item2 = document.getElementById("r").value;
        l.push(item1);
        r.push(item2);
        document.getElementById('l').value = "";
        document.getElementById('r').value = "";
        if (l.length == inputs) {
            len = l.length;
            for (i = 0; i <= len; i++) {
                if (l[i] !== undefined && r[i] !== undefined) {
                    let count = Math.floor((r[i] - l[i]) / 2);
                    if (r[i] % 2 == 1 || l[i] % 2 == 1)
                        count++;

                    if (count % 2 == 0) {
                        result.push("Even")
                    }
                    else {
                        result.push("Odd")
                    }
                }
            }
            console.log(result)
            for (i = 0; i < result.length; i++) {
                document.write(result[i] + "<br/>");
            }
        }
    }
}
Assign2.addEventListener('click', addInputs)
XOR.addEventListener('click', addRange);