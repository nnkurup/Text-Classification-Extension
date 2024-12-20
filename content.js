// content.js

// Function to classify harmful or sensitive text
// In this case, we are sending the text to the Python model (which could be hosted on a server).
function classifyText(text) {
    // Send a message to the background script to classify the text
    chrome.runtime.sendMessage(
        { action: "classifyText", text: text },
        function (response) {
            if (response) {
                // Display classification result and confidence score
                console.log(`The text is classified as: ${response.label} with a confidence score of ${response.score}`);
                alert(`The text is classified as: ${response.label} with a confidence score of ${response.score}`);
            } else {
                console.error("No response received from background script");
            }
        }
    );
}

// Function to extract text from the web page
function getPageText() {
    let bodyText = document.body.innerText;
    return bodyText.trim();
}

// Automatically classify the text on page load
let pageText = getPageText();
classifyText(pageText);
