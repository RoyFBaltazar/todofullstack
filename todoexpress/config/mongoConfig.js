const mongoose = require('mongoose')

async function main(){
    await mongoose.connect(process.env.MONGO_DB_URI)
}
module.exports = main