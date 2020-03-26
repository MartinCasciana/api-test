require('../../src/global');

const {Animal} = include('/models');
const animals = require('./animals.json');
exports.seed = async knex => {
    await knex(Animal.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(animals.map(animal => Animal.insertOne(animal))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
