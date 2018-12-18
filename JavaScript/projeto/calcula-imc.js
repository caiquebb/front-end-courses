var montaPaciente = function(trPaciente) {

  var paciente = {
    nome: trPaciente.getElementsByClassName("info-nome")[0].textContent,
    peso: trPaciente.getElementsByClassName("info-peso")[0].textContent,
    altura: trPaciente.getElementsByClassName("info-altura")[0].textContent,
    calculaImc: function() {
      return this.peso / (this.altura * this.altura);
    }

  };

  return paciente;
};

var percorreArray = function(trPacientes, comportamento) {

  for (var i = 0; i < trPacientes.length; i++) {
    comportamento(trPacientes[i]);
  };
};

function calculaTodosImcs() {
  var trPacientes = document.getElementsByClassName("paciente");

  percorreArray(trPacientes, function (trPaciente) {
    var paciente = montaPaciente(trPaciente);
    var imc = paciente.calculaImc();

    trPaciente.getElementsByClassName("info-imc")[0].textContent = imc;

    console.log(imc);
  });
};

var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", calculaTodosImcs);
