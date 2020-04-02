const toNumber = require('lodash/toNumber');
const {PAGE_SIZE} = process.env;
const createModel = include('helpers/modelCreate');

const name = 'Animal';
const tableName = 'animal';

const selectableProps = [
    'id',
    'animal',
    'scientific_name',
    'gender',
    'deleted',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class AnimalsModel extends createModel {
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
        const results = this.knex.select()
            .from(this.tableName)
            .where(filter)
            .limit(PAGE_SIZE).offset(toNumber(PAGE_SIZE)*toNumber(skip));

        return results;
    }
}

module.exports = knex => new AnimalsModel({knex});
