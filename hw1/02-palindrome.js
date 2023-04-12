reverseString = function(str) {
    return str.split("").reverse().join("");
};

isPalindrome = function() {
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    if (input.value != null && input.value >= 0) 
    {
        var inputString = String(input.value);

        if (inputString == '')
        {
            result.innerHTML = "Please input a positive number";
            result.classList.remove("text-danger");
            result.classList.remove("text-success");
            return;
        }

        var inputReverse = reverseString(inputString);

        if (inputString == inputReverse) {
            result.innerHTML = "Yes! " + inputString + " is a palindrome! :D"
            result.classList.remove("text-danger");
            result.classList.add("text-success");
        }
        else {
            result.innerHTML = "No! " + inputString + " is not a palindrome! :("
            result.classList.remove("text-success");
            result.classList.add("text-danger");
        }
    }
    else {
        result.innerHTML = "Please input a positive number";
        result.classList.remove("text-danger");
        result.classList.remove("text-success");
    }
}
