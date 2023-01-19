export const config = {
    db: {
        host: 'localhost',//'127.0.0.1',
        port: 27017, 
        dbName: 'clase19',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    }
}