// Função para exibir informações do usuário
function exibirInformacoes() {
  // Obter o valor do campo de nome do HTML
  var nome = document.getElementById("nome").value;

  // Obter o valor do campo de idade do HTML
  var idade = document.getElementById("idade").value;

  // Obter o valor do campo de dia de nascimento do HTML
  var diaNascimento = document.getElementById("diaNascimento").value;

  // Obter o valor do campo de mês de nascimento do HTML
  var mesNascimento = document.getElementById("mesNascimento").value;

  // Obter o valor do campo de ano de nascimento do HTML
  var anoNascimento = document.getElementById("anoNascimento").value;

  // Combinar dia, mês e ano para formar a data de nascimento
  var dataNascimento = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

  // Criar um array contendo as informações formatadas
  var informacoes = [
    "Nome: " + nome,
    "Idade: " + idade,
    "Data de Nascimento: " + dataNascimento
  ];

  // Exibir cada informação em uma caixa de alerta
  informacoes.forEach(function(info) {
    alert(info);
  });
}
