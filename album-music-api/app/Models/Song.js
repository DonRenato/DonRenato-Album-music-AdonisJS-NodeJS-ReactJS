'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Song extends Model {
  static get hidden () {
    return ['created_at', 'updated_at', 'album_id']
  }
}

module.exports = Song
