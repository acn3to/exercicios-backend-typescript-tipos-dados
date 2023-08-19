const soletrar = (nome: string): string => {
	const letras: string[] = [];

	for (const letra of nome) {
		letras.push(letra);
	}

	return letras.join('-');
};

console.log(soletrar('programador'));
