import { Application } from 'egg';
import * as uuid from 'node-uuid';

export default function Project(app: Application) {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const projectSchema = new Schema({
    id: {
      type: String,
      default: uuid.v1(),
    },
    name: {
      type: String,
      required: true,
    },
    desc: String,
    favicon: String,
    readme: String,
    version: {
      type: String,
      default: '1.0.0',
    },
    exported: {
      type: Number,
      default: 0,
    },
    createTime: {
      type: String,
      default: Date.now(),
    },
    updateTime: {
      type: String,
      default: Date.now(),
    },
  });
  return mongoose.model('Project', projectSchema, 'project');
}
