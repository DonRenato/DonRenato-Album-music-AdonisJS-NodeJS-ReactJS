import React from 'react';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import PageAlbums from './components/pages/PageAlbums';
import DetailsAlbum from './components/pages/DetailsAlbum';
import CreateAlbum from './components/pages/CreateAlbums';

export default function Routes(){
    return(
      <Router>
        <Switch>
          <Route exact path="/albums" component={PageAlbums}></Route>
          <Route exact path="/albums/:id" component={DetailsAlbum}></Route>
          <Route path="/create" component={CreateAlbum}></Route>
        </Switch>
    </Router>
    );
    
  }