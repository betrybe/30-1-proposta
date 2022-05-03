import mongoose from 'mongoose';

export default class MongoConnection {
    static async connect (URI: string) {
        await mongoose.connect(URI);
    }
} 