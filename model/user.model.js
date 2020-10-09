const mongoose = require('mongoose')
const { Schema } = require('mongoose')
mongoose.connect('mongodb+srv://mukund:mukund123@mukund.aodqs.mongodb.net/Test?retryWrites=true&w=majority', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true })
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err))

module.exports =
    mongoose.model("User_info", new Schema({
        name: {
            type: String,
            required: true,
            min: 3,
            max: 20
        },
        email: {
            type: String,
            required: true,
            min: 8,
            max: 20
        },
        password: {
            type: String,
            required: true,
            min: 5,
            max: 12
        }
    }, {
        collation: "User_info",
        timestamps: true
    }))