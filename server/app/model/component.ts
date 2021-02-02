import { Application } from 'egg';
import * as uuid from 'node-uuid';
export default function Component(app: Application) {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const componentSchema = new Schema({
        id: { type: String, default: uuid.v1() },
        name: { type: String, required: true },
        key: { type: String, required: true },
        icon: { type: String },
        img: { type: String },
        createTime: { type: String, default: Date.now() },
        updateTime: { type: String, default: Date.now() }
    });
    return mongoose.model('Component', componentSchema, 'component');
}