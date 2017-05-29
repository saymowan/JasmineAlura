function PacienteBuilder(){


	var nome = "Saymon";
	var idade = 23;
	var altura = 1.90;
	var peso = 90;


	var clazz = {

		constroi : function() {
			return Paciente(nome, idade, peso, altura);

		},

		comIdade : function(valor) {
			idade = valor;
			return this;

		},

		comPeso : function(valor) {
			peso = valor;
			return this;
		}
	};


	return clazz;

}