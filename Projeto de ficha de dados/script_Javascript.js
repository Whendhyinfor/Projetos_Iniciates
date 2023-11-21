document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevenir o envio do formulário

  // Obter os valores dos campos
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  // Aqui você pode adicionar a lógica para verificar as credenciais do usuário
  console.log("Nome de usuário:", username);
  console.log("Senha:", password);


  // Limpar os campos do formulário
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});