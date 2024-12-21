import mongoose from "mongoose";

const connectToDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("mongoDB connected succesfully");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/4413`)

}


export default connectToDB;