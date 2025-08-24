import { MongoClient } from "mongodb";

export default async function addProductSafe(productData) {
  try {
    const uri = process.env.NEXT_PUBLIC_MONGO_DB_URI;
    if (!uri) throw new Error("MONGO_DB_URI not set");

    // create independent client
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(process.env.DB_NAME || "GenzWearDB");
    const collection = db.collection("products"); // only products

    const result = await collection.insertOne(productData);

    await client.close(); // close connection
    return { success: true, result };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
