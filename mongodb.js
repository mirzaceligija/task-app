// CRUD create read update delete

const mongodb = require('mongodb')
const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) =>{
    if(error){
        return console.log('Unable to connect to database !')
    }

    const db = client.db(databaseName) //Creating a database
    
    db.collection('users').insertOne({
         name: 'Mirza',
         age: 21
    }, (error, result) =>{
         if(error){
             return console.log('Unable to insert user !')
         }
         console.log(result.ops)
    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'John',
    //         age: 31
    //     }, {
    //         name:'Miki',
    //         age: 21
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert documents !')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Finish TaskApp',
    //         completed: false
    //     },{
    //         description: 'Clean the room',
    //         completed: true
    //     },{
    //         description: 'Have a breakfast',
    //         completed: false
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert tasks !')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({name: 'John2'}, (error, user) =>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     if(user == null){
    //         console.log('No users found !')
    //     }
    //     else{
    //         console.log(user)
    //     }
    // })

    // db.collection('users').find({age: 21}).toArray((error, users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({age: 21}).count((error, count) =>{
    //     console.log(count)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d9aed4a85f03037c0386d7f")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(erro)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    /*
    db.collection('users').deleteMany({
        age:22
    }).then((result) =>{
            console.log(result)
        }).catch((error) =>{
            console.log(error)
    })

    db.collection('tasks').deleteOne({
        description:'Clean the room'
    }).then((result) =>{
            console.log(result)
        }).catch((error) =>{
            console.log(error)
    })
    */
})