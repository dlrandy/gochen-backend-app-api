import Koa from 'koa';
import mongoose from "mongoose";

export default (app: Koa) => {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(`mongodb://localhost:27017/gochen-e2e-blog`, {
    useUnifiedTopology: true,
    // tslint:disable-next-line: object-literal-sort-keys
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("error", error => {
    app.emit('error', error);
    // TODO when some ciritical errors happened, it should send a email or other alert
    throw new Error(`error connecting to db: ${error}`);
  });
  db.once("open", () => console.log("database connected"));
};
