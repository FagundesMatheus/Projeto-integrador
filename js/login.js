document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-login');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos do formulário
        const cpf = document.getElementById('cpf-input').value;
        const password = document.getElementById('password-input').value;

        // Cria um objeto com os dados do formulário
        const formData = {
            cpf: cpf,
            password: password
        };

        // Faz a requisição POST para o backend
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.text(); // ou response.json() se o servidor retornar JSON
            } else {
                throw new Error('Erro na requisição');
            }
        })
        .then(data => {
            console.log('Sucesso:', data);
            // Redireciona para a outra página HTML após sucesso
            window.location.href = 'main.html'; // substitua 'pagina_de_sucesso.html' pelo caminho da sua página de sucesso
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
    });
});
