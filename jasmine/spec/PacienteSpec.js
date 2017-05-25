describe ("Paciente", function() {


	it("deve calcular o IMC", function(){
		var Saymon = new Paciente("Saymon",25,85,1.92);
		expect(Saymon.imc()).toEqual(85 / (1.92 * 1.92));
	});
});