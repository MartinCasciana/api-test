const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Car';
const tableName = 'car';

const selectableProps = [
    'id',
    'brand',
    'model',
    'year',
    'deleted',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class CarsModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }

    find({
        skip, filter = {}
    }){
        console.log(filter);
        const results = this.knex.select()
            .from(this.tableName)
            .where(filter)
            .limit(PAGE_SIZE).offset(toNumber(PAGE_SIZE)*toNumber(skip));

        return results;
    }
}

module.exports = knex => new CarsModel({knex});
