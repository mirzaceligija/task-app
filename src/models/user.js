const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    Name: {
        type: String,
        required: true,
        trim:true
    },
    Age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be greather then 0!')
            }
        }
    },
    Email: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email not valid!')
            }
        }
    },
    Password: {
        type:String,
        required: true,
        minlength: 7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not containt "password"')
            }
        }
    }
})

module.exports = User