interface Produto {
	produto: string;
	lote: number;
	ano: number;
	qtd: number;
}

const gerarEtiquetas = (produto: Produto): string[] => {
	const etiquetas: string[] = [];

	for (let i = 1; i <= produto.qtd; i++) {
		const numeroFormatado = i.toString().padStart(3, '0');
		etiquetas.push(`${produto.lote}-${produto.ano}-${numeroFormatado}`);
	}

	return etiquetas;
};

const produto: Produto = {
	produto: 'CPU Dual Core 3.0GHZ',
	lote: 321,
	ano: 2022,
	qtd: 5,
};

console.log(gerarEtiquetas(produto));
