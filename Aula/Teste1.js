import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

const PrecoSucos =5.2;
const PrecoSanduiches = 12;

let quantidadeSuco = Number(prompt("Quantos sucos você pegou? "));
let quantidadeSanduiches = Number(prompt("Quantos sanduiches vocÊ pegou? "));

let totalSuco = quantidadeSuco * PrecoSucos;
let totalSanduiches = quantidadeSanduiches * PrecoSanduiches;
let totalConta = totalSuco + totalSanduiches;

console.log(`
    Recibo:
    -------
    Você pegou ${quantidadeSuco} sucos e ${quantidadeSanduiches} sanduiches.
    Total dos sucos: R$ ${totalSuco.toFixed(2)}
    Total dos sanduiches: R$ ${totalSanduiches.toFixed(2)}
    ----------------------
    Valor total da conta: R$ ${totalConta.toFixed(2)}
`);