class Retangulo{
    lado1;
    lado2;


    perimentro(){
        let p = 2*this.lado1 + 2*this.lado2;
        return p;
    }


    area(){
        let a = this.lado1 * this.lado2;
        return a;
    }


    toString(){
        let str = `lado1: ${this.lado1}, lado2: ${this.lado2}\n`;
        str += `Area: ${this.area()}, perimetro: ${this.perimentro()}`;
        return str;
    }
}


let r1 = new Retangulo();
r1.lado1 = 10;
r1.lado2 = 20;

console.log(r1.toString());


