// Define a senha correta
const senhaCorreta = "minhaSenha123";
let tentativa;

// Laço de repetição que continua até a senha estar correta
do {
  tentativa = prompt("Digite a senha:");
} while (tentativa !== senhaCorreta);

alert("Senha correta! Acesso permitido.");