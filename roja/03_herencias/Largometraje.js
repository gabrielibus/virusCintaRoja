//Crear un sistestema heredado de Largometraje que puede contener Documentay y Película

// vamos a crear la estructura básica de una SuperClase o ClaseMaestra

class Largometraje {

    constructor(titulo, director, genero){
        this.titulo = titulo;
        this.director = director;
        this.genero = genero;
    }
// puedo poner métodos
    descripcion() {
        let cadena = this.titulo + " " + this.director + " " + this.genero + " "
        return cadena
    }

    //getter
    get getterDescripcion() {
        let cadena = this.titulo + " " + this.director + " " + this.genero
        return cadena
    }


    //métodos


}

module.exports = { Largometraje }

let pelicula = new Largometraje("kill bill", "Tarantino", "Sangre como un HP")

console.log(pelicula.descripcion())


