const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-app-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Task = mongoose.model('Task', {
    Description: {
        type: String,
        trim:true,
        required:true
    },
    Completed: {
        type: Boolean,
        default:false
    }
})