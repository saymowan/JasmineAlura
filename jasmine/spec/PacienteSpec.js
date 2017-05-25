describe ("Paciente", function() {


	it("deve calcular o IMC", function(){
		var Saymon = new Paciente("Saymon",25,85,1.92);

		var IMC = Saymon.imc();
		expect(IMC).toEqual(85 / (1.92 * 1.92));
	});


	it("Deve calcular o IMC 2",function(){
		


	});





});