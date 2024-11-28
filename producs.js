let productos = ["Heladera", "Televisor", "Lavarropas", "EquipoDeMusica", "Computadora", "Playstation"];
console.log(productos)

let producto = productos.shift();
    productos.push(producto);

    productos.push("Licuadra", "Horno")
console.log(productos);

console.log("La cantidad de electrodomesticos que hay son: " + productos.length)

for (let i = 0; i < productos.length; i++){
    let productoBuscado = "Televisor"
    let productoEncontrado = false
    
    if(productos[i] === productoBuscado){
        console.log(`Producto encontrado.`);
        productoEncontrado = true
        break
    }else{
        console.log(`Producto buscado no existente`);
        break
    }
}

let elementos = productos.join(" ");
console.log(elementos);
let cantidadElementos = elementos.split(" ").length;
console.log(`la cantidad de elemento que posee la cadena de texto es: ` + cantidadElementos);


for (let i = 0; i < productos.length; i++) {
    productos[3] = "Notebook";
    
}
console.log(productos.join(", "))