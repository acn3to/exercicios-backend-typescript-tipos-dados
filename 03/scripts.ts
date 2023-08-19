const gerarTabuada = (numeros: number[]): void => {
	for (const numero of numeros) {
		for (let i = 1; i <= 10; i++) {
			const resultado = numero * i;
			console.log(`${numero} x ${i} = ${resultado}`);
		}
		console.log('---------------');
		console.log();
	}
};

const numerosArray = [1, 5, 2];

gerarTabuada(numerosArray);
