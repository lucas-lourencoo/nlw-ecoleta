import path from 'path';

module.exports = {
    client : 'sqlite3',
    connection : {
        // Padrozina caminho para acesso a uma pasta
        filename: path.resolve(__dirname, 'src', 'database' ,'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault : true
};