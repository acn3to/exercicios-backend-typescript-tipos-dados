interface Usuario {
	nome: string;
	idade: number;
	status: boolean;
}

const usuarios: Usuario[] = [
	{
		nome: 'Guido',
		idade: 32,
		status: true,
	},
	{
		nome: 'Dani',
		idade: 30,
		status: true,
	},
	{
		nome: 'João',
		idade: 40,
		status: false,
	},
	{
		nome: 'Guilherme',
		idade: 29,
		status: true,
	},
	{
		nome: 'Ana',
		idade: 18,
		status: false,
	},
	{
		nome: 'José',
		idade: 28,
		status: false,
	},
];

const filtrarPeloNome = (nome: string): Usuario[] => {
	const usuariosEncontrados: Usuario[] = usuarios.filter((usuario) =>
		usuario.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase()),
	);
	return usuariosEncontrados;
};

console.log(filtrarPeloNome('jo'));
