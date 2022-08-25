//Aula de callbaks e funções de arrays

//Prática guiada

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicaPorTres = (arrayDeNumeros) => {
  const arrayMultiplicado = [];
  for(const numero of arrayDeNumeros){
    arrayMultiplicado.push(numero *3);
  }
  return arrayMultiplicado;  
};

//console.log('TRIPLO', multiplicaPorTres(listaDeNumeros));

const retornaPares = (arrayDeNumeros) => {
  const arrayPares=[];
  for(let numero of arrayDeNumeros) {
    if(numero % 2 === 0){
      arrayPares.push(numero);
    }
  }
  return arrayPares;
};

//console.log('Pares', retornaPares(listaDeNumeros));

//Callbacks
const imprimeNumeros = (arrayDeNumeros, callback) => {
  const response = callback(arrayDeNumeros)

  console.log('Imprime números', response);
};

imprimeNumeros(listaDeNumeros, multiplicaPorTres);
imprimeNumeros(listaDeNumeros, retornaPares);

//refazer usando o map()
const multiplicaPorTresComMap = listaDeNumeros.map((numero, indice, array) => {
  return numero * 3
});

console.log('MAP', multiplicaPorTresComMap);

//refazer usando o filter
const retornaParesComFilter = listaDeNumeros.filter((numero, indice, array)=>{
  return numero % 2 === 0;
})

console.log('FILTER', retornaParesComFilter);

//pra guardar na cabeça
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

//console.log(pokemons);
//atividade a crie uma função que defina vida do pokemon como 100
// const aumentaVida = (poke) => {
//   return {
//     nome: poke.nome,
//     tipo: poke.tipo,
//     vida: 100
//   }
//   //return { ...poke, vida: 100}; //abreviação do código acima
// }

//teste da função
// const pikachu = {
//   nome: 'Pikachu',
//   tipo: 'elétrico',
//   vida: 35
// }

// console.log(pikachu);

// console.log('Aumentando a vida do Pikachu', aumentaVida(pikachu));

//Parte B 
// const pokemonsVidaCheia = pokemons.map(aumentaVida) 
// console.log('Pokemons vida cheia', pokemonsVidaCheia);

//outra forma
// const pokemonsVidaCheia = pokemons.map((a) => a.vida = 100)
// console.log(pokemons);

//parte C
// const pokemonsDeFogo = pokemons.filter((poke) =>{
//   return poke.tipo === 'fogo'
// })

//retorna direto da array pokemonsVidaCheia
// const pokemonsDeFogo = pokemonsVidaCheia.filter((poke) =>{
//   return poke.tipo === 'fogo'
// })

//console.log('Pokemons de fogo', pokemonsDeFogo);

//outras formas
// const pokemonsDeFogo = pokemons.filter((poke) => poke.tipo === 'fogo')
// console.log(pokemonsDeFogo);

//usado para trocar índice por índice

function poke(objeto){
  const pokemon100 = {...objeto, vida: 100}

  return pokemon100
}

console.log(poke(pokemons[2]));

const pokemonsDeFogoVidaCheia = pokemons.map(poke).filter((item)=>{
  return item.tipo === 'fogo'
})

console.log(pokemonsDeFogoVidaCheia);