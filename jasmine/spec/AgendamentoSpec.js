describe("Agendamento", function(){
	var saymon;
	var agenda;


	beforeEach(function(){
		saymon = new PacienteBuilder().constroi();
		agenda 	  = new Agendamento();
	});


	it("deve agendar para 20 dias depois", function(){
		var consulta  = new Consulta(saymon,[], false, false, new Date(2014, 7, 1));
		var novaconsulta = new agenda.para(consulta);
		expect(novaconsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
	});


	it("deve pular finais de semana", function(){ 
		var consulta  = new Consulta(saymon,[], false, false, new Date(2014, 5, 30));
		var novaConsulta = agenda.para(consulta);

		expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 6, 21).toString());


	});


});