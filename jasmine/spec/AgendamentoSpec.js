describe("Agendamento", function(){



	it("deve agendar para 20 dias depois", function(){
		var guilherme = new PacienteBuilder().constroi();
		var agenda 	  = new Agendamento();


		var consulta  = new Consulta(guilherme,[], false, false, new Date(2014, 7,1));
		var novaconsulta = new agenda.para(consulta);


		expect(novaconsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
	});




});