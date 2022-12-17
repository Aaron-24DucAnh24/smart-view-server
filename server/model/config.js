
const {MongoClient} = require('mongodb')
const url = 'mongodb+srv://aaron:smartviewapp@cluster0.3c3cero.mongodb.net/?retryWrites=true&w=majority'
const connection = new MongoClient(url)

async function connect(colName1, cb, req, colName2, colName3, colName4) {
    await connection.connect()
    console.log('--> Connect successfully to database!')

    const db = connection.db('smartview')
    var collection1 = db.collection(colName1)
    var collection2
    var collection3
    var collection4
    if(colName2 != null) collection2 = db.collection(colName2)
    if(colName3 != null) collection3 = db.collection(colName3)
    if(colName4 != null) collection4 = db.collection(colName4)

    var data = await cb(collection1, req, collection2, collection3, collection4)

    connection.close()

    return data
}

module.exports = connect
