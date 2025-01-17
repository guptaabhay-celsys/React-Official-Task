const app =require('./app');
const pool = require('./config/pool');

pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'Shopify_Store',
    user: 'postgres',
    password: 'Cel12345'
})
    .then(() => {
        app().listen(3000, () => {
            console.log('listening on port 3000');
        });
    })
    .catch((err) => console.log(err));