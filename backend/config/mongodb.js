import mongoose from "mongoose";

const connetDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB CONNECTED")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connetDB;