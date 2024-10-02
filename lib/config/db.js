import mongoose from "mongoose";

export const ConnectDB = async () => {
  const username = "wiss";
  const password = encodeURIComponent("@Kosochi1228");
  const cluster = "Cluster0";

  await mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.cldmm.mongodb.net/todo-app`
  );
  console.log("DB Connected");
};
