// Certifique-se de que o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    var entrarBtn = document.getElementById('entrarBtn');
    
    if (entrarBtn) {
        entrarBtn.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
    }
});
