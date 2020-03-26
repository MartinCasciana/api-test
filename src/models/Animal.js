const createModel = include('helpers/modelCreate');

const name = 'Animal';
const tableName = 'animal';

const selectableProps = [
    'animal',
    'scientific_name',
    'gender',
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
}

module.exports = knex => new AnimalsModel({knex});
