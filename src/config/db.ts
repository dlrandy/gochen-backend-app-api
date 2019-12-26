import mongoose from "mongoose";
export default () => {
  mongoose.connect(`mongodb://localhost:27017/gochen-e2e-blog`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on("error", error => {
    // TODO when some ciritical errors happened, it should send a email or other alert
    throw new Error(`error connecting to db: ${error}`);
  });
  db.once("open", () => console.log("database connected"));
};
