const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const result = document.getElementById("result")


    c1 = num2 - num1;
    c2 = num3 - num2;
    c3 = num4 - num3;
    console.log(num1, num2, num3, num4)

    if (c1 == c2 && c1 === c3 && c2 == c3) {
        result.textContent = "You are Arithmetic";
    } else {
        result.textContent = "You are NOT Arithmetic";
    }
});
