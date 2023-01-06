import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const data = req.body;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.poa6kpu.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = client.db("meetups");
  const meetupCollection = db.collection("meetups");
  const result = await meetupCollection.insertOne(data);

  console.log(result);

  client.close();

  res.status(201).json({ message: "Meetup inserted!" });
};

export default handler;
