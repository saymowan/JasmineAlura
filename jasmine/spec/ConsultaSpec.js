describe ("Consulta", function(){


	var guilherme;
	

	beforeEach(function (){
		guilherme = new PacienteBuilder().constroi();
	});


	describe("Consulta com procedimentos",function(){

			it("nao deve cobrar nada se for um retorno", function(){
			var consulta = new Consulta(guilherme,[], true, true);
			expect(consulta.preco()).toEqual(0);
		});


		it("deve cobrar 25 reais procedimento comum", function(){
			var consulta = new Consulta (guilherme,["comum"], false, false)
			expect(consulta.preco()).toEqual(25);

		});


		it("deve cobrar especificamente por procedimento", function(){
			var consulta  = new Consulta(guilherme,["raio-x","procedimentox"], false, false);
			expect(consulta.preco()).toEqual(55 + 25);
		});


	});	

	
	describe ("Consulta particular",function(){
		it("deve cobrar o dobro se a consulta for particular", function(){
			var consulta = new Consulta(guilherme, ["raio-x"], true, false)

			expect(consulta.preco()).toEqual(55*2);
		});

	});

});