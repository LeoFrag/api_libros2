const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {

    useNewUrlParser: true,
    });

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, 
{ 
    collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

// Crear una instancia del modelo
const nuevoLibro = new Libro(
    { id: '1', titulo: 'Libro 1', autor: 'Autor 1' })

    
  // Guardar el nuevo libro en la base de datos
const result = nuevoLibro.save()
    .then(result => {
      console.log('Libro guardado con éxito:', result);
    })
    .catch(error => {
      console.error('Error al guardar el libro:', error);
    });


module.exports = Libro; 