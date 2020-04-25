import React, { useState }from 'react';
import api from "../../../services/api";
import { Redirect } from 'react-router-dom';



// import { Container } from './styles';

export default function CreateAlbums() {

    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    

    async function handleNewAlbum(e){
      e.preventDefault();

      const data = {
        album,
        artist
      };
      try{
          if(album === '' || artist === '') return

          await api.post('/albums', data) ;  

          setAlbum("");
          setArtist("");
          
         

      }
      catch(err){
          alert('erro ao cadastrar')
      }
      return<Redirect to="/albums" />
    }
  return (
    <div className="box">
        <h1 className="title">Criar novo album</h1>
        <form onSubmit={handleNewAlbum} > 
            <div className="field">
                <div className="control">
                    <input 
                    type="text" 
                    className="input"
                    placeholder="Nome do album"
                    value={album}
                    onChange={e => setAlbum(e.target.value)}
                    />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input 
                    type="text" 
                    className="input"
                    placeholder="Nome do artista"
                    value={artist}
                    onChange={e => setArtist(e.target.value)}
                    />
                </div>
            </div>

            <div className="field">
                <button className="button" type="submit">Adicionar</button>
            </div>
        </form>

        
        
        
    </div>
  );
}
