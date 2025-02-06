const charCount = document.getElementById("wordcount");
const textArea = document.getElementById("userinput");
const maxChars = 250;

textArea.addEventListener("input", function() {
    const currentLength = textArea.value.length;
    charCount.textContent = `${currentLength} / ${maxChars}`;

    if (currentLength >= maxChars) {
        textArea.classList.add("limit");
        charCount.classList.add("limit");
    } else {
        textArea.classList.remove("limit");
        charCount.classList.remove("limit");
    }
});