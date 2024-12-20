# Install necessary packages
# pip install scikit-learn

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

# Sample training data for classification (replace with real data in practice)
train_texts = [
    "This is hate speech and propaganda", 
    "This is an act of terrorism",
    "This is very negative and harmful",
    "This statement is neutral",
    "This is a positive and happy message"
]

train_labels = [
    "hate propaganda", 
    "terrorism", 
    "negativity", 
    "neutral", 
    "positive"
]

# Create a classification model
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model on the provided texts
model.fit(train_texts, train_labels)

# Function to classify harmful or sensitive text
def classify_text(text):
    """
    Classifies the input text into one of the trained categories.

    Args:
    text (str): The input text to classify.

    Returns:
    str: The predicted label for the input text.
    """
    # Predict the category of the input text
    predicted_label = model.predict([text])[0]
    
    # Predict probability scores
    predicted_probabilities = model.predict_proba([text])[0]
    
    # Extract the confidence score for the predicted label
    label_index = list(model.classes_).index(predicted_label)
    confidence_score = predicted_probabilities[label_index]
    
    return predicted_label, confidence_score

# Example usage
if __name__ == "__main__":  # Corrected line
    while True:  # Loop to allow multiple inputs
        # Input text from the user
        text = input("Enter text to classify (or type 'exit' to quit): ").strip()
        if text.lower() == 'exit':
            break

        # Classify the text and retrieve the label and confidence score
        label, score = classify_text(text)

        # Output the result
        print(f"The text is classified as: {label} with a confidence score of {score:.2f}")
