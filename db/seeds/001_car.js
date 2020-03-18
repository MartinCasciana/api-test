require('../../src/global');

const {Car} = include('/models');
const cars = require('./cars.json');
exports.seed = async knex => {
    await knex(Car.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(cars.map(car => Car.insertOne(car))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
