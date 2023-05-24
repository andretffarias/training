var word = prompt("enter a word for verification:")
var invertedWord = ""

for (var i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i]
}

if (word == invertedWord) {
    alert(
        "The word " + word +
        "corresponds to a palindrome"
    )
}else {
    alert(
        "The word " + word + 
        " does not correspond to a palindrome\n" +
        word + " on the contrary is " + invertedWord
    )
}