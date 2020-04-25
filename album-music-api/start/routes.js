'use strict'

const Route = use('Route');
const Album = use('App/Models/Album');
const Song = use('App/Models/Song');


Route.get('/albums', async () =>{
  const albums = await Album.query().orderBy('id', 'desc').fetch();

  return albums;
})


Route.get('/albums/:id', async ({ params }) =>{
  const albums = await Album.query()
          .with('song')
          .where('id', params.id)
          .fetch();

  return albums;
})



Route.post('/albums', async ({ request }) => {
  const { artist, album } = request.all();

  const newAlbum = new Album();

  newAlbum.name = album;
  newAlbum.artist = artist;

  await newAlbum.save();

  return newAlbum;
})

Route.delete('/albums/:id', async ({ params }) => {
  const album = await Album.find(params.id);

 await album.delete();


})


Route.post('/albums/:id/song/add', async ({ params, request }) => {

  const song = new Song();

  song.album_id = params.id;
  song.name = request.input("song");

  await song.save();

  return song;
})


Route.put('/albums/:id/photo', async({ request, params}) =>{
  //recebendo a imagem
  const image = request.file("album_image", {
    types: ["image"],
    size: "2mb"
  });
  //movendo a imagem para pasta public/uploads

  await image.move("./public/uploads", {
    name: `${new Date().getTime()}.jpg`
  });


  //caminho da imagem
  const pathImage = `http://localhost:3333/uploads/${image.fileName}`

  const album = await Album.find(params.id);
  album.image = pathImage;

  await album.save();
  return album;
})


Route.delete('/songs/:id', async ({ params }) => {
  const song= await Song.find(params.id);

 await song.delete();


})
