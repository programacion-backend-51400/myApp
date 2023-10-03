import dotennv from 'dotenv'

dotennv.config()
export default {
    persistence: process.env.PERSISTENCE || 'MONGO',
    appPort: process.env.PORT || 8080,
    databaseURI: process.env.MONGO_URL,
    databaseName: process.env.MONGO_DBNAME
}