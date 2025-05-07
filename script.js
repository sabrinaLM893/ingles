// script.js

// Open challenge function
function openChallenge(challengeName) {
  alert(`Opening challenge: ${challengeName}`);
}

// Submit solution function
document.getElementById("submitSolution").addEventListener("click", function () {
  const code = document.getElementById("codeArea").value;
  const explanation = document.getElementById("explanation").value;
  if (code.trim() === "" || explanation.trim() === "") {
    alert("Please provide both code and explanation.");
  } else {
    alert("Solution submitted successfully!");
  }
});

// Chat functionality
function sendChat() {
  const chatInput = document.getElementById("chatInput").value;
  if (chatInput.trim() === "") {
    alert("Please enter a question!");
    return;
  }

  const chatWindow = document.getElementById("chatWindow");
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = `You: ${chatInput}`;
  chatWindow.appendChild(userMessage);

  // Simulate AI response
  setTimeout(() => {
    const aiMessage = document.createElement("div");
    aiMessage.classList.add("ai-message");
    aiMessage.textContent = `AI: Here's an explanation for your query about "${chatInput}". (AI response simulation)`;
    chatWindow.appendChild(aiMessage);
  }, 1000);

  document.getElementById("chatInput").value = "";
}
