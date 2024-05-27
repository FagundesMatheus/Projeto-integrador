
// Função para formatar o CPF
function formatCPF(value) {
    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, '');
    
    // Adiciona os pontos e traço conforme o formato do CPF
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    return value;
}

// Função para aplicar a máscara de CPF ao campo de entrada
function applyCPFFormat(event) {
    // Obtém o valor atual do campo de entrada
    let inputValue = event.target.value;
    
    // Aplica a formatação de CPF ao valor atual
    let formattedValue = formatCPF(inputValue);
    
    // Atualiza o valor do campo de entrada com o valor formatado
    event.target.value = formattedValue;
}

// Seleciona o campo de entrada do CPF
let cpfInput = document.getElementById('cpf-input');

// Adiciona um ouvinte de eventos de entrada ao campo de entrada do CPF
cpfInput.addEventListener('input', applyCPFFormat);



