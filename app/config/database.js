const knex = require('knex');
module.exports=knex({
    client:'pg',
    connection: 'postgress://postgres:Carlos1996@localhost:5432/postgres',
    pool:{min: 1,max: 2},
    acquireConnectionTimeout:5000



});