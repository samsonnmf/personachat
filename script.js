// Invite functionality (generates a shareable link)
document.getElementById('inviteBtn').addEventListener('click', function() {
    const chatContainer = document.getElementById('chatContainer');
    const shareUrl = document.getElementById('shareUrl');
    const baseUrl = window.location.origin + window.location.pathname; // Your site's URL
    shareUrl.href = baseUrl + '#chat'; // Simple "room" via URL hash
    shareUrl.textContent = baseUrl + '#chat';
    chatContainer.style.display = 'block';
    alert('Invite sent! Share the link above. (This is a demo—real invites need a backend.)');
});

// Fake chat (adds messages locally for now)
document.getElementById('sendBtn').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const messages = document.getElementById('messages');
    if (input.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = `You: ${input.value}`;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight; // Auto-scroll
        input.value = '';
    }
});

// Show chat if URL has #chat (for "joining" via invite)
if (window.location.hash === '#chat') {
    document.getElementById('chatContainer').style.display = 'block';
}
