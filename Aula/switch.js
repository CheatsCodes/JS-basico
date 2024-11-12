import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true}); 

let precoDoIngreço = 500.0;
let categoria = prompt('Qual a categoria do comprador? ')  
let valorCobrado = precoDoIngreço;
switch(categoria){
    case 'crianca':
        valorCobrado = 0;
        break;
    case 'convidado':
        valorCobrado = valorCobrado * 0.75;
        break;
    case 'funcionarioIdoso':
        valorCobrado = valorCobrado *0.5;
    case 'idoso':
    case 'funcionario':
        valorCobrado = valorCobrado * 0.5;
        break;
    case 'geral':
        break;
    default:
        valorCobrado = NaN;
}
if (!isNaN(valorCobrado)){
    console.log(`valor cobrado: R$${valorCobrado.toFixed(2)}`);
}else{
    console.log('Categoria invalida');
}
    


