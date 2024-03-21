//Asignación: Explorando los Fundamentos de TypeScript
//Objetivo General.Desarrollar una aplicación sencilla en TypeScript que aplique tipos básicos, objetos, arrays y funciones básicas para consolidar tu comprensión de estos conceptos fundamentales.

//Contexto.Imagina que estás construyendo una pequeña sección de un sistema de gestión para una biblioteca. Este sistema debe permitir registrar nuevos libros, buscar libros por título y listar todos los libros disponibles

// Definición del tipo para representar un libro

interface libro {
    titulo: string;
    autor: string;
    anio_publicacion: number;
    disponibilidad: boolean;

}

// Implementar Funciones Básicas:a) Agregar Libro, b)  Buscar Libro por Título, c) Listar Libros.

const biblioteca: libro[] = [];

function agregar_libro(titulo: string, autor: string, anio_publicacion: number, esta_disponible: boolean) {
    const libro_nuevo: libro = {
        titulo: titulo,
        autor: autor,
        anio_publicacion: anio_publicacion,
        disponibilidad: esta_disponible,
    };

    biblioteca.push(libro_nuevo);
}

agregar_libro("Cien años de soledad", "Gabriel García Márquez", 1954, true);
agregar_libro("El señor de los anillos", "J. R. R. Tolkien", 1967, true);
agregar_libro("Crimen y castigo", "Fiódor Dostoyevski", 1866, false);
agregar_libro("Madame Bovary", "Gustave Flaubert", 1857, true);
agregar_libro("1984", "George Orwell", 1949, false);
agregar_libro("Don Quijote de la Mancha", " Miguel de Cervantes", 1605, true);


console.log(biblioteca);


function buscar_libro_x_titulo(titulo: string): libro | null {
    const libro_esta = biblioteca.find(libro => libro.titulo === titulo);
    return libro_esta || null;
}

const bucar_libro = buscar_libro_x_titulo("Madame Bovary");

if (bucar_libro !== null) {
    console.log("Aqui esta tu libro, disfrutalo!!!:", bucar_libro);
} else {
    null;
}

function listar_libros(): void {
    console.log("Libros disponibles en esta biblioteca:");
    biblioteca.forEach(libro => {
        if (libro.disponibilidad) {
            console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año de publicación: ${libro.anio_publicacion}`);
        }
    });
}
listar_libros()

