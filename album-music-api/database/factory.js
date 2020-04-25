'use strict'

 const Factory = use ('Factory')

 Factory.blueprint('app/Models/Album', faker => ({
     name: faker.name(),
     artist: faker.name(),
  }
 ));

 Factory.blueprint('App/Models/Song', faker =>({
     name: faker.name(),
     album_id: faker.integer({min: 1, max: 10}),
  }
 ));
