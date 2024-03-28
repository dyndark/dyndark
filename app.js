const input = document.getElementById("inputbox")

function reversestring (str) {
    // this reverses the user's input
    return str.split("").reverse().join()
    // the . join makes the list element into a string


}

function check() {
    const value = document.getElementById("inputbox").value;
    const reverse = reversestring(value);
    console.log(value, reverse);

    if (value === reverse) {
        alert("Your text is a palindrome");
    } else {
        alert("Your text is not a palindrome. Reversed Text: " + reverse);
    }
}
