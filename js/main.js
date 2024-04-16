// Esta função é executada quando o documento HTML está completamente carregado
$(document).ready(function () {
  // Configuração do plugin Slick para o carrossel de imagens
  $("#carousel-images").slick({
    autoplay: true, // Ativar a reprodução automática do carrossel
  });

  // Evento de clique no botão de menu hamburguer
  $(".menu-hamburguer").click(function () {
    // Slide Toggle para mostrar ou ocultar a navegação
    $("nav").slideToggle();
  });

  // Aplicação de máscara para o campo de telefone
  $("#telefone").mask("(00) 00000-0000");

  // Validação do formulário usando o plugin jQuery Validation
  $("form").validate({
    rules: {
      nome: {
        required: true, // Campo nome é obrigatório
      },
      email: {
        required: true, // Campo email é obrigatório
        email: true, // Verifica se o campo email possui um formato de email válido
      },
      telefone: {
        required: true, // Campo telefone é obrigatório
      },
      veiculoInteresse: {
        required: false, // Campo veiculoInteresse não é obrigatório
      },
      mensagem: {
        required: true, // Campo mensagem é obrigatório
      },
    },
    messages: {
      // Mensagens de erro personalizadas para cada campo
      nome: "Por favor, insira seu nome",
      email: "Por favor, insira um email válido",
      telefone: "Por favor, insira seu telefone",
      mensagem: "Por favor, insira uma mensagem",
    },
    // Função a ser executada quando o formulário é submetido com sucesso
    submitHandler: function (form) {
      console.log(form); // Aqui você pode adicionar a lógica para enviar o formulário
    },
    // Função a ser executada quando o formulário contém campos inválidos
    invalidHandler: function (evento, validador) {
      // Conta o número de campos inválidos
      let camposIncorretos = validador.numberOfInvalids();
      // Se houver campos inválidos, exibe um alerta com o número de campos incorretos
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  // Evento de clique nos botões de veículos na lista
  $(".lista-veiculos button").click(function () {
    // Encontra o elemento de destino onde a página será rolada
    const destino = $("#contato");
    // Obtém o nome do veículo associado ao botão clicado
    const nomeVeiculo = $(this).parent().find("h3").text();
    // Define o valor do campo de interesse de veículo no formulário
    $("#veiculo-interesse").val(nomeVeiculo);

    // Animação de rolagem até o elemento de destino
    $("html").animate(
      {
        scrollTop: destino.offset().top, // Rola até a posição do elemento de destino
      },
      800 // Duração da animação em milissegundos (1 segundo)
    );
  });
});
