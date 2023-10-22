document.addEventListener("DOMContentLoaded", function() {
    const chatArea = document.getElementById("chatArea");
    const messageInput = document.getElementById("messageInput");
    const usernameInput = document.getElementById("usernameInput");
    const sendButton = document.getElementById("sendButton");
    const clearButton = document.getElementById("clearButton"); // New "Clear Chat" button

    // Function to display a message with the username
    function displayMessage(username, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        chatArea.appendChild(messageElement);

        // Scroll to the bottom of the chat area
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    // Function to send a message
    function sendMessage() {
        const username = usernameInput.value;
        const message = messageInput.value;
        if (username.trim() !== "" && message.trim() !== "") {
            displayMessage(username, message);

            // Save the message in localStorage
            const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
            storedMessages.push({ username, message });
            localStorage.setItem("chatMessages", JSON.stringify(storedMessages));

            messageInput.value = "";
        }
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
