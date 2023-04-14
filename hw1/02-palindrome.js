reverseString = function(str) {
    return str.split("").reverse().join("");
};

isPalindrome = function() {
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    if (input.value != null && input.value >= 0) 
    {
        let inputString = String(input.value);

        if (inputString == '')
        {
            result.innerHTML = "Please input a positive number";
            result.style.color = '#024AB6'; //blue
            return;
        }

        var inputReverse = reverseString(inputString);

        if (inputString == inputReverse) {
            result.innerHTML = "Yes! " + inputString + " is a palindrome! :D"
            result.style.color = 'green';
        }
        else {
            result.innerHTML = "No! " + inputString + " is not a palindrome! :("
            result.style.color = '#A80000'; //red
        }
    }
    else {
        result.innerHTML = "Please input a positive number";
        result.style.color = '#024AB6'; //blue
    }
}
