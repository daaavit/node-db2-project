const { default: knex } = require("knex")

// STRETCH
const cars = [{

    vin: '11111111111111111',
    make: 'lexus',
    model: 'gx',
    milage: 4333,
    title: 'clean',
    transmission: 'automatic'

},
{

    vin: '11111154112211111',
    make: 'bmw',
    model: '535i',
    milage: 93123,
    title: 'salvage',
    transmission: 'manual'

},
{

    vin: '12345678912345678',
    make: 'mercedes',
    model: 'e500',
    milage: 45333,

}]


exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}