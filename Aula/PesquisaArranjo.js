import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

let idades = [];
let terminou = false;
let cont = 0;
while(!terminou){
    let idade = Number(prompt(`Entre a idade do ${cont+1} o colega: `));
    if (Number(idade) == -1){
        break;
    }
}
idades[cont] = idade;
cont++;

let resp = prompt('Qual idade deseja veridficar a frequencia? ');
let idadeFreq = Number(resp);
let freq = 0;
let maiores = 0;
for(let i = 0; i<idades.length; i++){
    if (idades[i] == idadeFreq){
        freq++
    }
    if (idades[i] > idadeFreq){
        maiores++;
    }

}

console.log(`Quantidade de colegas com ${idadeFreq} anos: ${freq}`);
console.log(`Quantidades de colegas com mais de ${idadeFreq}: ${maiores}`);