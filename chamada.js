const nome = ['Adriano Noviski Gomes Dos Santos', 'Emilly Crisanto Da Cruz Freire', 'Emilly Priscila Macedo Vieira', 'Felipe De Souza Motta', 'Guilherme De Vito Gebing', 'henrique Luiz Camilo Pradi', 'Izabella Malucelli', 'Kauã Dhyego Prado França', 'Kauan José Viola Marcelino',
 'Lauana Da Rosa Quadros', 'Sarah', 'Luan Carlos Moreira', 'Maria Helena dos Santos Mucci Daniel', 'Nicole Gabriele Miranda Lobato', 'Raquel Ester cruz Pacheco', 'Renato Souza Alves Junior', 'Kauã Moura  De souza', 'Lucas Da Silva Salvador'];

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 27, 14, 16, 17, 18, 19, 21, 22];

nome.splice(10,1, "Livia Bicalho Dos Santos");
numero.splice(10,1, 13);

for (let i = 0; i < nome.length; i++) {
        console.log(nome[i] + " - " + numero[i]);
}


