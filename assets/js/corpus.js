let currentTextKey = "start";
const displayDiv = document.querySelector('.display');

// Find text by key
function getTextByKey(key) {
  return corpusData.texts.find(item => item.key === key);
}

// Display text by key
function displayTextByKey(key) {
  const textItem = getTextByKey(key);
  if (textItem) {
    currentTextKey = key;
    // Replace the text content with the text item's text, and make references clickable
    displayDiv.innerHTML = linkifyReferences(textItem.text);
  }
}

// Make numbered references clickable
function linkifyReferences(text) {
  // Match patterns like (1), (2), (-1), etc.
  return text.replace(/\(([-\d]+)\)/g, (match, number) => {
    return `<a href="#" class="reference" data-key="${number}">${match}</a>`;
  });
}

// Handle reference clicks
displayDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('reference')) {
    e.preventDefault();
    const key = e.target.dataset.key;
    displayTextByKey(key);
  }
});

// Load initial text on page load
window.addEventListener('DOMContentLoaded', () => {
  displayTextByKey(currentTextKey);
});

backButton = document.getElementById('back-button')

backButton.addEventListener('click', () => {
  if (currentTextKey !== "start"){
    currentTextKey = "start";
    displayTextByKey(currentTextKey);
  }
});