describe("Maior E Menor", function(){


	    it("deve entender numeros em ordem nao sequencial", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);

    	}); 

    	it("deve entender numeros em ordem decrescente", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([10,9,8,7]);

        expect(algoritmo.pegaMaior()).toEqual(10);
        expect(algoritmo.pegaMenor()).toEqual(7);

    	}); 


    	it("deve entender numeros em ordem crescente", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([2,3,6,88,100]);

        expect(algoritmo.pegaMaior()).toEqual(100);
        expect(algoritmo.pegaMenor()).toEqual(2);

    	}); 


    	it("deve entender somente uma entrada", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([1]);

        expect(algoritmo.pegaMaior()).toEqual(1);
        expect(algoritmo.pegaMenor()).toEqual(1);

    	}); 




});