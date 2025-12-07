function showMessage() {
    const messages = [
        "✅ Migration réussie!",
        "☁️ Vous êtes maintenant sur Azure!",
        "🎉 Bravo, votre app est en ligne!",
        "💪 Le cloud computing, c'est facile!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
}
