describe ("Consulta", function(){


	it("nao deve cobrar nada se for um retorno", function(){
		var saymon = new Paciente("Saymon",24, 72,1.80);
		var consulta = new Consulta(saymon,[], true, true);
		expect(consulta.preco()).toEqual(0);
	});


	it("deve cobrar 25 reais procedimento comum", function(){
		var saymon = new Paciente ("Saymon",24,169,1.91);
		var consulta = new Consulta (saymon,["comum"], false, false)
		expect(consulta.preco()).toEqual(25);

	});


	it("deve cobrar especificamente por procedimento", function(){
		var paciente  = new Paciente("Saymon", 24,88,1.78);
		var consulta  = new Consulta(paciente,["raio-x","procedimentox"], false, false);
		expect(consulta.preco()).toEqual(55 + 25);
	});


	it("deve cobrar o dobro se a consulta for particular", function(){
		var paciente = new Paciente("Saymon 2", 24, 98, 1.90);
		var consulta = new Consulta(paciente, ["raio-x"], true, false)

		expect(consulta.preco()).toEqual(55*2);
	});




});