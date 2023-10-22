document.addEventListener("DOMContentLoaded", function() {
    const chatArea = document.getElementById("chatArea");
    const messageInput = document.getElementById("messageInput");
    const usernameInput = document.getElementById("usernameInput");
    const sendButton = document.getElementById("sendButton");
    const clearButton = document.getElementById("clearButton"); // New "Clear Chat" button

    // Function to display a message with the username
    function displayMessage(username, message) {
        chatArea.innerHTML += `<strong>${username}:</strong> ${message}<br>`;
        // Scroll to the bottom of the chat area
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    // Function to send a message
    function sendMessage() {
        // ... (no changes here)
    }

    // Function to clear the chat
    function clearChat() {
        chatArea.innerHTML = ""; // Clear the chat display
        localStorage.removeItem("chatMessages"); // Remove stored messages
    }

    // Load and display stored messages when the page loads
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    storedMessages.forEach(function({ username, message }) {
        displayMessage(username, message);
    });

    // Event listeners
    sendButton.addEventListener("click", sendMessage);
    clearButton.addEventListener("click", clearChat);

    // ...
});
