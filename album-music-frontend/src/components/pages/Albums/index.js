import React from 'react';
import {Link} from 'react-router-dom';


// import { Container } from './styles';

export default function Albums({albums, handleDeleteAlbum}) {
    

  return (
    <div className="column">
        {albums.map(album => (
                <div key={album.id}className="media box">
                <div className="media-left"><span className="tag is-info">{album.id}</span></div>
                <div className="media-content">
                  <p className="title is-4">{album.name}</p>
                  <p>Artist: {album.artist}</p>
                  </div>
                <div className="media-right">
                  <Link to={`/albums/${album.id}`} className="button is-success">
                    <i className="fas fa-info-circle" />
                  </Link>
                  <button className="button is-danger" onClick={() => handleDeleteAlbum(album.id)}><i className="fas fa-trash-alt" /></button>
                </div>
              </div>
              ))}
                
    </div>
  );
}
