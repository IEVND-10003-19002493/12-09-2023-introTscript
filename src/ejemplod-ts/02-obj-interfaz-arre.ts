

interface Alumno{
    matricula: number;
    nombre: string;
    email: string;
    edad: number;
}


const alumno:Alumno={
    nombre:'Karla',
    email:'karla18falcon@gamil.com',
    edad: 23,
    matricula: 19002493 
}

let mascotas=['perro','gato','perico']
console.table(mascotas);
mascotas[1]='nuevo gato';
mascotas.push('perico verde')
console.table(mascotas);

let nuevoArre:(number|string)[]=[]
nuevoArre.push('RCR');
nuevoArre.push(88773773);
