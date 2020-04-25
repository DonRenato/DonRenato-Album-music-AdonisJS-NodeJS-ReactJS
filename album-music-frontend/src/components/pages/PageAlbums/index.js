import React, { useEffect, useState }from 'react';
import Albums from '../Albums';
import Create from '../CreateAlbums';
import api from "../../../services/api";


// import { Container } from './styles';

export default function PageAlbums() {
    const [albums, setAlbums] = useState([]);
   
    
  
    async function handleDeleteAlbum(id){
      try{
        if(!window.confirm("Deseja mesmo excluir o album?")) return;
        await api.delete(`albums/${id}`);
        setAlbums(albums.filter(album => album.id !== id));
        
      }catch(err){
        alert('erro ao deletar. Tente novamente');
      }
    }

    
    
    useEffect(()=>{
      async function fetchData(){
        const response = await api.get("/albums");
        setAlbums(response.data);
      }  
     fetchData();
    
    }, [albums]);

    
      return (
        <>
        <div className="section container">
          <Create  />
          <div className="colums">
            <div className="column">
              <Albums albums={albums} handleDeleteAlbum={handleDeleteAlbum} />
            </div>
          </div>
        </div> 
        </>
      );
}
