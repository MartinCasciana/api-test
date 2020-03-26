exports.up = function(knex) {
    return knex.schema
        .createTable('animal', function (table) {
            table.string('id');
            table.string('animal', 255);
            table.string('scientific_name', 255);
            table.string('gender', 255);
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('animal');
};
