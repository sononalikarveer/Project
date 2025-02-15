// script.js
const chatbotBox = document.getElementById('chatbot-box');
const chatbotInput = document.getElementById('chatbot-input');
const sendChatbotButton = document.getElementById('send-chatbot');

sendChatbotButton.addEventListener('click', () => {
    const userMessage = chatbotInput.value;
    if (userMessage) {
        const userMessageElement = document.createElement('div');
        userMessageElement.textContent = `You: ${userMessage}`;
        chatbotBox.appendChild(userMessageElement);
        
        // Mock chatbot response
        const botResponseElement = document.createElement('div');
        botResponseElement.textContent = `Chatbot: This is a mock response to "${userMessage}"`;
        chatbotBox.appendChild(botResponseElement);
        
        chatbotInput.value = '';
        chatbotBox.scrollTop = chatbotBox.scrollHeight; // Scroll to the bottom
    }
});