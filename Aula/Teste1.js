import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

let PrecoSucos =5.2;
let PrecoSanduiches = 12;

let quantidadeSuco = Number(prompt("Quantos sucos você pegou? "));
let quantidadeSanduiches = Number(prompt("Quantos sanduiches você pegou? "));

let descontoSuco = 0;
if (quantidadeSuco>10){
    descontoSuco = PrecoSucos * 0.2 * quantidadeSuco;
    PrecoSucos = PrecoSucos * 0.8;
}

let totalSuco = quantidadeSuco * PrecoSucos;

let descontoSanduiche = 0;
if (quantidadeSanduiches>10){
    descontoSanduiche = PrecoSanduiches * 0.2 * quantidadeSanduiches;
    PrecoSanduiches = PrecoSanduiches * 0.8;
}
let totalSanduiches = quantidadeSanduiches * PrecoSanduiches;

let totalConta = totalSuco + totalSanduiches;
let totalDesconto = descontoSuco + descontoSanduiche;

console.log(`
    Recibo:
    -------
    Você pegou ${quantidadeSuco} sucos e ${quantidadeSanduiches} sanduiches.
    Total dos sucos: R$ ${totalSuco.toFixed(2)}
    Total dos sanduiches: R$ ${totalSanduiches.toFixed(2)}
    ----------------------
    Desconto aplicado: R$ ${totalDesconto.toFixed(2)}
    Valor total da conta: R$ ${totalConta.toFixed(2)}
`);