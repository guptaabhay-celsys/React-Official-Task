const pg = require('pg');
// const { createTables } = require('../models/index');

class Pool {
    _pool = null;

    async connect(options){
        this._pool = new pg.Pool(options)
        // await createTables();
        return this._pool.query('SELECT 1+1;')

    }

    close() {
        return this._pool.end();
    }

    query(sql, params){
        return this._pool.query(sql, params);
    }
}

module.exports = new Pool();