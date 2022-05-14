import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const MONGODB = process.env.REACT_APP_MONGODB;

  if (req.method === "POST") {
    const data = req.body;

    let client;

    try {
      client = await MongoClient.connect(MONGODB);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    const tasksCollection = db.collection("tasks");

    const result = await tasksCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Task inserted" });
  } else if (req.method === "PUT") {
    const data = req.body;

    let client;

    try {
      client = await MongoClient.connect(MONGODB);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    const tasksCollection = db.collection("tasks");

    const result = await tasksCollection.updateOne(
      { _id: ObjectId(data.id) },
      { $set: { complete: true } }
    );

    client.close();

    res.status(201).json({ message: "Task updated" });
  } else if (req.method === "DELETE") {
    const data = req.body;

    let client;

    try {
      client = await MongoClient.connect(MONGODB);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    const tasksCollection = db.collection("tasks");

    const result = await tasksCollection.deleteOne({ _id: ObjectId(data) });

    client.close();

    res.status(201).json({ message: "Task deleted" });
  }
}

export default handler;
