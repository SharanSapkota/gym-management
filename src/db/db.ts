
import mongoose from 'mongoose';
import config from '../config/index.config'

export const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(config.MONGO_URI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.error(error)
    }
}

