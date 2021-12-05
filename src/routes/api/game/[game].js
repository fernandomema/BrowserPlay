import clientPromise from '../../../lib/db.js';

export async function get (request) {
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('games');
    const game = await collection.findOne({name: request.params.game});
    return {
        status: 200,
        body: game
    }
}