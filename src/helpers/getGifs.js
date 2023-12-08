// Definimos una función asíncrona getGifs que toma una categoría como argumento
export const getGifs = async( category ) => {
 const url = `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyCo72SYVNaEhwvxWj3iDzOUhAva95u4B_Y&client_key=react-school&limit=20`;
// Hacemos una petición a la API de Giphy
const resp = await fetch(url);
// Extraemos los datos de la respuesta en formato JSON
const data = await resp.json();

console.log(data);
// Mapeamos los datos a un nuevo arreglo de objetos con id, título y URL de cada imagen
const gifs = data.results.map( img => ({
id: img.id,
title: img.title,
url: img.media_formats.tinygif.url
}));
// Devolvemos el arreglo de objetos
return gifs;
}
