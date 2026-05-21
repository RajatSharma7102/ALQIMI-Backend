const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const UserModel = require('./models/Users')

const app = express()
app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://registrationUser:Reg%40123456@ac-vjoi9pr-shard-00-00.dmkhr5i.mongodb.net:27017,ac-vjoi9pr-shard-00-01.dmkhr5i.mongodb.net:27017,ac-vjoi9pr-shard-00-02.dmkhr5i.mongodb.net:27017/?ssl=true&replicaSet=atlas-b6fehs-shard-0&authSource=admin&appName=Registration-cluster")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log(err));

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.josn(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})