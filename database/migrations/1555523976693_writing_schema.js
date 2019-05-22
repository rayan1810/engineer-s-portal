'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WritingSchema extends Schema {
  up () {
    this.create('writings', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('writings')
  }
}

module.exports = WritingSchema
