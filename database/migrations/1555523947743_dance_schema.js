'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DanceSchema extends Schema {
  up () {
    this.create('dances', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('dances')
  }
}

module.exports = DanceSchema
