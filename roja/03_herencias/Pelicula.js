const { Largometraje } = require("./Largometraje");

class Pelicula extends Largometraje {
    constructor(titulo, director, genero, duracion){
        super(titulo, director, genero);
        this.duracion = duracion;
    }

    //podríamos incluir métodos o getter o setter de ser necesario

}

module.exports = { Pelicula }

let pelicula1 = new Pelicula("el aro", "no sé", "terror");



