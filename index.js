const userInput = document.getElementById('notes');
const savedInput = localStorage.getItem('notes');

if (savedInput !== null){
    userInput.value = savedInput;
}

userInput.addEventListener('input', saveNotes);

function saveNotes() {
    localStorage.setItem('notes', userInput.value)
}

// Source - https://stackoverflow.com/a/25621277
document.querySelectorAll("textarea").forEach(function(textarea) {
  textarea.style.height = textarea.scrollHeight + "px";
  textarea.style.overflowY = "hidden";

  textarea.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});