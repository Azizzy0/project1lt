// Get elements
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat
function addMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

// Event listener for the send button
sendButton.addEventListener('click', function () {
    const message = messageInput.value;
    if (message.trim() !== '') {
        addMessage('You: ' + message);
        messageInput.value = '';
    }
});

// Event listener for pressing Enter in the input field
messageInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendButton.click(); // Trigger the button click event
    }
});
