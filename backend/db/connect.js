let databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/caterr';
if (process.env.NODE_ENV === 'production') {
    databaseUrl += '?ssl=true';
}

const knex = require('knex')({
    client: 'pg',
    connection: databaseUrl
});

module.exports = knex;
