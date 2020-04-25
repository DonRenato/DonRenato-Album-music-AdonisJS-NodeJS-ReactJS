'use strict'



/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AlbumSongSeeder {
  async run () {
    await Factory.model("App/Models/Album").createMany(10);
    await Factory.model("App/Models/Song").createMany(100);
  }
}

module.exports = AlbumSongSeeder
