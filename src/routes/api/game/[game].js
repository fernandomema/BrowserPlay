import clientPromise from '../../../lib/db.js';

export async function get (request) {
     if (!request.params.game) return {
        status: 400,
        body: {
            error: 'Missing game parameter'
        }
    }
    
    const dbConnection = await clientPromise;
    const db = dbConnection.db();
    const collection = db.collection('games');
    const game = await collection.findOne({name: request.params.game});
    if (game) {
        return {
            status: 200,
            body: game
        }
    } else {
        return {
            status: 404,
            body: {
                error: 'Game not found'
            }
        }
    }
}