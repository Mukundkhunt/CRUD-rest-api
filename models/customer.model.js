const mongoose = require('mongoose')
const db = 'Paste The database Link'
// const server = ''
// const user = ''
// const database = ''
// const password = ''


// mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`).then(()=> console.log("Database is connected")).catch(err => console.log(err))
mongoose.connect(db, {useCreateIndex:true, useUnifiedTopology:true, useNewUrlParser: true})
.then(()=> console.log("Database is connected"))
.catch(err => console.log(err))

let CustomerSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        require : true,
        unique : true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)