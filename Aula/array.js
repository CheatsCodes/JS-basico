function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function multiplicadoresNegativos(list){
    for(let i=0;i<list.length;i++){
        if (list[i] < 0){
            list[i] = list[i] * -2;
        }
    }
    return list
}

function menor(list){
    let menor = list[0];
    for(let i=1;i<list.length;i++){
        if (menor > list[i]){
            menor = list[i];
        }
    }
    return menor;
}

function arranjoToString(dados){
    let str = '';
    for(let e of dados){
        str = str + '['+e+']';

    }
    return str;

}

let numeros = new Array(100);
for(let i=0;i<100;i++){
    numeros[i] = randomInt(-100,100);


}

console.log(arranjoToString(numeros));
console.log(arranjoToString(multiplicadoresNegativos(numeros)));
console.log(menor(numeros));