
class UsersAPI {
    async test(col) {
        var data = await col.find({}).toArray()
        return data
    }
}

module.exports = new UsersAPI()
