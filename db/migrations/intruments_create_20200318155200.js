exports.up = function(knex) {
    return knex.schema
        .createTable('instrument', function (table) {
            table.string('id');
            table.string('hexcode', 255);
            table.string('family', 255);
            table.integer('instrument', 255);
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('instrument');
};
