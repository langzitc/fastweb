import { Application } from 'egg';

export default function Layout(app: Application) {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const layoutSchema = new Schema({
    pid: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
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
  return mongoose.model('Layout', layoutSchema, 'layout');
}
