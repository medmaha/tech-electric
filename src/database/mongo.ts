import { MongoClient } from 'mongodb';
// import { MONGO_URL } from '$env/static/private';
import mongoose from 'mongoose';

const devEnv = process.env.NODE_ENV === 'development';
let connectionString: string;

let e = process.env.NODE_ENV;

if (devEnv) connectionString = 'mongodb://127.0.0.1:27017/teti';
else
	connectionString =
		'mongodb+srv://medmaha:meddeluxe@techdeluxe.ywthmod.mongodb.net/teti?retryWrites=true&w=majority';

const client = new MongoClient(connectionString);

export async function startMongo(): Promise<any> {
	console.log('starting mongodb...');

	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	mongoose.connect(connectionString);
	// return client.connect();
}

export default client.db();
