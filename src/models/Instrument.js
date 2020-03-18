const createModel = include('helpers/modelCreate');

const name = 'Instrument';
const tableName = 'instrument';

const selectableProps = [
    'hexcode',
    'family',
    'instrument',
    'createdAt',
    'updatedAt',
    'deletedAt',
    '__v'
];

class IntrumentsModel extends createModel {
    constructor(props) {
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new IntrumentsModel({knex});
