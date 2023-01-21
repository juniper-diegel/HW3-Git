let origArray = [2,3,4];

document.addEventListener("DOMContentLoaded", function(event) {
    
    document.getElementById("text1").value = origArray[0];
    document.getElementById("text2").value = origArray[1];
    document.getElementById("text3").value = origArray[2];
    
    document.getElementById("cube").addEventListener("click", function() {
        let newArray = origArray.map(x => x ** 3);
        document.getElementById("text1").value = newArray[0];
        document.getElementById("text2").value = newArray[1];
        document.getElementById("text3").value = newArray[2];
    })

    document.getElementById("fourth").addEventListener("click", function fourthPower() {
        let newArray = origArray.map(x => x ** 4);
        document.getElementById("text1").value = newArray[0];
        document.getElementById("text2").value = newArray[1];
        document.getElementById("text3").value = newArray[2];
    })
})

function squareRoot() {
    let newArray = origArray.map(x => x * x);
    document.getElementById("text1").value = newArray[0];
    document.getElementById("text2").value = newArray[1];
    document.getElementById("text3").value = newArray[2];
}