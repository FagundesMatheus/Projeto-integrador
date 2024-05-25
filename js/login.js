document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const cpf = document.getElementById('cpf-input').value;
    const password = document.getElementById('password-input').value;

    if (cpf.length < 14) {
        alert("Digite um cpf válido")
        return
    }
    if (password == "") {
        alert("Digite uma senha")
        return
    }
    window.location.href = "home.html";

}
    /*
    CONEXÃO COM O BACKEND - IGNORADO POR HORA

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'FieldCPF': cpf,
            'FieldPassword': password
        })
    })
    .then(response => {
        if (response.ok) { // Verifica se a resposta do servidor é bem-sucedida
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Verifica se há uma URL de redirecionamento na resposta
        if (data.includes('redirected')) {
            window.location.href = '/home';
        } else {
            console.log(data);
        }
    })
    .catch(error => console.error('Error:', error));
});
