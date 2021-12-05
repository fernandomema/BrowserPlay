import clientPromise from '../../lib/db.js';

export async function get (params) {
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('games');
    const games = await collection.find().toArray();
    return {
        status: 200,
        body: games
    }
}