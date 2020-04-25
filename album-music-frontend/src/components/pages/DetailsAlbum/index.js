import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import api from '../../../services/api';
import CreateSong from '../CreateSong';



export default function DetailsAlbum(props) {
  const [song, setSong] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [image, setImage] = useState({ preview: '', raw: '' });
  const { id } = props.match.params;
 

  
  useEffect(() => {
    async function AlbumDetails() {

      const response = await api.get(`/albums/${id}`);

      setAlbums(response.data);
       
      
      

    }

    AlbumDetails();
    
  }, [albums])


  useEffect(() =>{
   
    if(image.preview !== "")
    return () => {
      if(image.preview !== ""){
        if(window.confirm("deseja alterar a imagem")){
          handleUpload();
          
        } 
      } 
    }
  },[image.preview])

  async function handleDeleteSong(id) {
    try {
      if (!window.confirm("Deseja mesmo excluir a musica?")) return;
      await api.delete(`songs/${id}`);
      setSongs(songs.filter(song => song.id !== id));

    } catch (err) {
      alert('erro ao deletar. Tente novamente');
    }

  }


  async function handleNewSong() {

    const { id } = props.match.params;


    if (song === "") return;


    const response = await api.post(`/albums/${id}/song/add`, { song });
    setSong(response.data)

    setSong("");

  }


  function handleChange(e) {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    });
  }

  async function handleUpload() {
    
    const formData = new FormData();
    formData.append('album_image', image.raw);

    await api.put(`/albums/${id}/photo`, formData);
    
    
  }


 

  

  return (

    <div className="box">
      <h1 className="title">
        Detalhes do Album {" "}
        <small>
          <Link to="/albums">
            Voltar
          </Link>
        </small>
      </h1>
      <div className="columns">
        <div className="column">
          { albums.map(album => (
            <img key={album.id} src={ image.preview ? image.preview : album.image} className="image" />
            )) 
          }<div className="field is-grouped">
            <div className="file control">
              <label className="file-label">
                <input
                  type="file"
                  className="file-input"
                  name="image"
                  onChange={handleChange}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <div className="file-label">
                    Escolher imagem
                    </div>
                </span>



              </label>
            </div>
            <button className="button is-info-control" onClick={handleUpload} >
              Atualizar
              </button>
          </div>
        </div>
        <div className="column">
          <CreateSong setSong={setSong} song={song} handleNewSong={handleNewSong} />
          {albums.map(album =>
            album.song.map((songs, idx) =>
              (<p key={songs.id}>{idx + 1} - {songs.name}
                <span className="icon has-text-danger"
                  onClick={() => handleDeleteSong(songs.id)}>
                  <i className="fas fa-trash-alt" />
                </span>
              </p>)
            ))}
        </div>
      </div>
    </div>
  );
}
