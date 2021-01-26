import { Application } from 'egg';
import * as uuid from 'node-uuid';

export default function Setting(app: Application) {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const settingSchema = new Schema({
        id: {
            type: String,
            default: uuid.v1()
        }
    });
    return mongoose.model('Setting', settingSchema, 'setting');
}