// script.js
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendChatButton = document.getElementById('send-chat');

sendChatButton.addEventListener('click', () => {
    const message = chatInput.value;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});