import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

function acrescentaVerificador(matricula, nivelAcesso=21) {
    let digitos = matricula;
    let soma = 0;
    while (digitos.length != 1) {
        for (let i = 0; i <digitos.length; i++) {
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma);
        soma = 0;
    }
    return nivelAcesso + matricula + '-' + digitos;
}

let matricula = prompt('Entre o numero de matricula: ');
let matriculacompleta= acrescentaVerificador(matricula);
console.log(`Numero de matricula completo: ${matriculacompleta}`);
