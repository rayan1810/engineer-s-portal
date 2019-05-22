'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotoSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotoSchema
