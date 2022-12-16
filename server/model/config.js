
const {MongoClient} = require('mongodb')
const url = 'mongodb+srv://aaron:smartviewapp@cluster0.3c3cero.mongodb.net/?retryWrites=true&w=majority'
const connection = new MongoClient(url)

async function connect(colName, cb, reqData) {
    await connection.connect()
    console.log('--> Connect successfully to database!')

    const db = connection.db('smartview')
    const collection = db.collection(colName)

    var data = await cb(collection, reqData)

    connection.close()

    return data
}

module.exports = connect
