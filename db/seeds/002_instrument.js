require('../../src/global');

const {Instrument} = include('/models');
const instruments = require('./instruments.json');
exports.seed = async knex => {
    await knex(Instrument.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(instruments.map(instrument => Instrument.insertOne(instrument))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
