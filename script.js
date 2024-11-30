document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const appSection = document.getElementById("app-section");
    const moodButtons = document.querySelectorAll(".mood-button");
    const moodFeedback = document.getElementById("mood-feedback");
    const chatInput = document.getElementById("chat-input");
    const chatSend = document.getElementById("chat-send");
    const chatMessages = document.getElementById("chat-messages");
  
    // Mock authentication
    const users = {};
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-password").value;
      if (username && password) {
        users[username] = password;
        alert("Signup successful! Please log in.");
        signupForm.reset();
      }
    });
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
      if (users[username] === password) {
        alert("Login successful!");
        appSection.classList.remove("hidden");
      } else {
        alert("Invalid credentials.");
      }
      loginForm.reset();
    });
  
    // Mood Tracker
    moodButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const mood = button.getAttribute("data-mood");
        moodFeedback.textContent = `You are feeling ${mood}!`;
      });
    });
  
    // Chatbot
    chatSend.addEventListener("click", () => {
      const userMessage = chatInput.value;
      if (userMessage.trim() === "") return;
  
      const userBubble = document.createElement("div");
      userBubble.textContent = `You: ${userMessage}`;
      chatMessages.appendChild(userBubble);
  
      // Mock AI Response
      setTimeout(() => {
        const aiBubble = document.createElement("div");
        aiBubble.textContent = "AI: Thank you for sharing. How can I assist further?";
        chatMessages.appendChild(aiBubble);
      }, 1000);
  
      chatInput.value = "";
    });
  });
  