const mongoose = require('mongoose')
const db = 'mongodb+srv://mukund:mukund123@mukund.aodqs.mongodb.net/Test?retryWrites=true&w=majority'
// const server = 'mukund.aodqs.mongodb.net'
// const user = 'mukund'
// const database = 'test'
// const password = 'mukund123'


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