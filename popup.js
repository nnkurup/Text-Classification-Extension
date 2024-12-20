document.getElementById('classify-btn').addEventListener('click', function() {
    const text = document.getElementById('text').value.trim();
  
    if (text.length === 0) {
      alert("Please enter some text.");
      return;
    }
  
    // Call the classify function
    const result = classifyText(text);
    document.getElementById('result').innerText = `The text is classified as: ${result.label} with a confidence score of ${result.score.toFixed(2)}`;
  });
  
  // A simple classifier function (example logic)
  function classifyText(text) {
    const labels = ["hate propaganda", "terrorism", "negativity", "neutral", "positive"];
    const scores = [0.9, 0.85, 0.6, 0.3, 0.2]; // Dummy confidence scores for illustration
  
    let label = "neutral";
    let score = 0.5;
  
    // Simulate a text classification
    if (text.toLowerCase().includes("hate") || text.toLowerCase().includes("propaganda")) {
      label = labels[0];
      score = scores[0];
    } else if (text.toLowerCase().includes("terrorism")) {
      label = labels[1];
      score = scores[1];
    } else if (text.toLowerCase().includes("negative") || text.toLowerCase().includes("harmful")) {
      label = labels[2];
      score = scores[2];
    } else if (text.toLowerCase().includes("positive") || text.toLowerCase().includes("happy")) {
      label = labels[4];
      score = scores[4];
    }
  
    return { label, score };
  }
  
