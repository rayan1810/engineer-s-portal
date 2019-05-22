'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusSchema extends Schema {
  up () {
    this.create('muses', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('muses')
  }
}

module.exports = MusSchema
