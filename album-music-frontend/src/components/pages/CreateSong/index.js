import React from 'react';


// import { Container } from './styles';

export default function CreateSong({song, setSong, handleNewSong}) {

  
  return (
    <div className="field has-addons">
        <div className="control is-expanded">
            <input 
            type="text" 
            className="input" 
            placeholder="digite o nome da musica"
            name="song" 
            value={song}
            onChange={e => {setSong(e.target.value
              )}}
            />
        </div>
        <div className="control">
            <button className=" button is-success" onClick={handleNewSong}>
                <i className="fas fa-plus"/>
            </button>
        </div>
    </div>
  );
}
