const { name } = require("./Pikachu");
const zeRoberto = require("./Pikachu");

function primeiraLetraMaiuscula(palavra) {
    const palavraSemEspaco = palavra;

    return (
        palavraSemEspaco[0].toUpperCase() + palavraSemEspaco.slice(1).toLowerCase()
    );
}
const buscarTipoPokemon = (pokemon) => {
    let tipos = [];
    for (let i = 0; i < pokemon.types.length; i++) {
        tipos += `${primeiraLetraMaiuscula(pokemon.types[i])} `;
    }
    return tipos;
};


const buscarPreEvolucao = (pokemon) => {
    if (pokemon.preEvolution === null) {
        return "";
    } else {
        const preEvolucaoComMaiusculo = primeiraLetraMaiuscula(
            pokemon.preEvolution
        );

        return `${preEvolucaoComMaiusculo}`;
    }
};

const buscarEvolucaoAtual = (pokemon) => {
    let nomePokemonMaisculo = pokemon.name.toUpperCase()
    if (pokemon.preEvolution !== null && pokemon.evolution !== null) {
        return `>> ${nomePokemonMaisculo} >>`;
    } else if (pokemon.preEvolution !== null) {
        return `>> ${nomePokemonMaisculo}`
    } else if (pokemon.evolution !== null) {
        return `${nomePokemonMaisculo} >>`
    } else {
        return `${nomePokemonMaisculo}`
    }
}

const buscarEvolucao = (pokemon) => {
    if (pokemon.evolution === null) {
        return "";
    } else {
        const evolucaoComMaiusculo = primeiraLetraMaiuscula(pokemon.evolution);
        return evolucaoComMaiusculo;
    }
};

const buscarAtributos = (pokemon) => {
    let hp = pokemon.attributes.hp;
    let attack = pokemon.attributes.attack;
    let defense = pokemon.attributes.defense;
    let specialAttack = pokemon.attributes.specialAttack;
    let specialDefense = pokemon.attributes.specialDefense;
    let speed = pokemon.attributes.speed

    console.log(`HP: ${hp}`)
    console.log(`ATK: ${attack} SpATK: ${specialAttack}`)
    console.log(`DEF: ${defense} SpDEF: ${specialDefense}`)
    console.log(`SPEED: ${speed}`);
}

const buscarLevels = (pokemon) => {
    let moves = pokemon.moves
    let niveis = []
    console.log("\nAtaques: \n\n");
    for (let i = 0; i < moves.length; i++) {
        let novoNivel = { nome: moves[i].name, level: moves[i].lv }
        niveis.push(novoNivel)
    }
    //O metodo sort organiza dentro do array os objetos com base na comparação de (a,b)
    niveis.sort((a, b) => {
        //Se o retorno for negativo, o primeiro valor aparece primeiro.
        return a.level - b.level;
    })
    let nomesDosNiveis
    for (let i = 0; i < moves.length; i++) {
        nomesDosNiveis = (niveis[i].nome.split(' '))
        console.log(`Lv ${niveis[i].level} - ${primeiraLetraMaiuscula(niveis[i].nome)}`)
    for (let i = 0; i < nomesDosNiveis.length; i++) {
        ataques = nomesDosNiveis[i]
        console.log(primeiraLetraMaiuscula(ataques))
        
    }
    }

};

function imprimir(pokemon) {
    const nomePokemon = primeiraLetraMaiuscula(pokemon.name);

    const habilidade = primeiraLetraMaiuscula(pokemon.ability);

    console.log(`Nome: ${nomePokemon} - Tipo: ${buscarTipoPokemon(pokemon)}`);
    console.log(`Habilidade: ${habilidade}\n`);
    console.log(`Linha de evolução: ${buscarPreEvolucao(pokemon)} ${buscarEvolucaoAtual(pokemon)} ${buscarEvolucao(pokemon)} \n`);
    console.log(`Atributos: \n\n`);
    buscarAtributos(pokemon);
    buscarLevels(pokemon);
}
imprimir(zeRoberto);

// Nome: Pikachu - Tipo: Eletrico
//   Habilidade: Static

//   Linha de evolução:
//     Pichu >> PIKACHU >> Raichu

//   Atributos:

//     HP: 100
//     ATK: 55 SpATK: 100
//     DEF: 34 SpDEF: 30
//     SPEED: 150

//   Ataques:
//     Lv 5 - Tackle
//     Lv 9 - Thunder Wave
//     Lv 20 - Thunderbolt
//     Lv 50 - Thunder

// function isEmpty (x) {
//   if (!x) { // caso seja undefined
//       return true
//   }
//   if (x === '' || x === null){ //caso seja uma variavel vazia
//       return true
//   }
//   if(Array.isArray(x)) { // caso seja um array vazio
//       if (x[0] === '' || x[0] === undefined) {
//           return true
//       }
//   }
//   if (JSON.stringify(x) === '{}') { // caso seja um objeto vazio
//       return true
//   }
//   return false
// }
