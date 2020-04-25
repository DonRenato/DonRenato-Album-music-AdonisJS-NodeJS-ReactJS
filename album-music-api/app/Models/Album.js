'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Album extends Model {
  song(){
    return this.hasMany("App/Models/Song");
  }

  static get hidden () {
    return ['created_at', 'updated_at', 'album_id']
  }


}

module.exports = Album
