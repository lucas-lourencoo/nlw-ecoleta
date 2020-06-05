import knex from 'knex';
import path from 'path';

const connection = knex({
    client : 'sqlite3',
    connection : {
        // Padrozina caminho para acesso a uma pasta
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault : true
})

export default connection;