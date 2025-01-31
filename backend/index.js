const app =require('./app');
const pool = require('./config/pool');

pool.connect({
    host: 'ep-bold-dawn-a8u9bbjz.eastus2.azure.neon.tech',
    port: 5432,
    database: 'shopifydb',
    user: "shopifydb_owner",
    password: "QXp9EVSN6wbx",
    ssl: { rejectUnauthorized: false }
})
    .then(() => {
        app().listen(3000, () => {
            console.log(`listening on port 3000`);
        });
    })
    .catch((err) => console.log(err));