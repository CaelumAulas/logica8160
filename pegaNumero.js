var msgPrompt

// Criar a função
function pegaNumero() {   
    
    return Number(
        prompt(msgPrompt).replace(",", ".").replace("O", 0)
    )
}
