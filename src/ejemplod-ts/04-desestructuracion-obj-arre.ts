

interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    cantante:string;
    year:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundos: 60,
    cancion: "Mañanitas",
    detalles: {
        cantante: "Cepillin",
        year: 1979
    }
}

//console.log(`El volumen actual es: ${reproductor.volumen}`);
//console.log(`El cantante actual es: ${reproductor.detalles.cantante}`);

const{volumen,detalles}=reproductor
const{cantante}=detalles
console.log(`El volumen actual es: ${volumen}`);
console.log(`El cantante actual es: ${cantante}`);

const colores:string[]=['red','green','blue','pink','violet'];
console.log(`Color1: ${colores[0]}`)
console.log(`Color2: ${colores[1]}`)
console.log(`Color3: ${colores[2]}`)
console.log(`Color4: ${colores[3]}`)

const[a,,,b]=colores;

console.log(`Color1: ${a}`)
console.log(`Color2: ${b}`)