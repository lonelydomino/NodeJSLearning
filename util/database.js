const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://lonelydomino:lonelydomino@cluster0.d37c9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(result => {
        _db = client.db()
        callback()
    })
    .catch(err => {
        console.log(error)
        throw err
    })
}
const getDb = () => {
    if(_db){
        return _db
    }
    throw 'No database found!'
}
exports.mongoConnect = mongoConnect
exports.getDb = getDb