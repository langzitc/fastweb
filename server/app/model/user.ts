import { Application } from 'egg';
import * as uuid from 'node-uuid';
export default function User(app: Application) {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        id: { type: String, default: uuid.v1() },
        username: { type: String, required: true },
        password: { type: String, required: true },
        avatar: { type: String },
        email: { type: String },
        actived: { type: Boolean, default: false },
        createTime: { type: String, default: Date.now() },
        updateTime: { type: String, default: Date.now() }
    });
    return mongoose.model('User', userSchema, 'user');
}