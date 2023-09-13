

function sumar():void{
    console.log(3+7);
}

sumar()

function sumar2(a:number,b:number):void{
    console.log(a+b);
}

sumar2(4,76)


function sumar3(a:number,b:number):number{
    return(a+b);
}

const resultado=sumar3(4,76)
console.log(resultado)

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascotas:Mascotas,x:number):void{
mascotas.edad+=x;
console.log(mascotas);
}

const nuevaMascota:Mascotas={
    nombre: "Pan",
    edad: 3,
    mostrarEdad: function (): void {
        console.log('La edad es; ',this.edad);
    }
}

    calcular(nuevaMascota,3);
