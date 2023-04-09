import { MongoClient } from 'mongodb';
// import { MONGO_URL } from '$env/static/private';

const devEnv = process.env.NODE_ENV === 'development';
let connectionString: string;

let e = process.env.NODE_ENV;

if (devEnv) connectionString = 'mongodb://127.0.0.1:27017/teti';
else
	connectionString =
		'mongodb+srv://medmaha:meddeluxe@techdeluxe.ywthmod.mongodb.net/teti?retryWrites=true&w=majority';

const client = new MongoClient(connectionString);

export function startMongo(): Promise<MongoClient> {
	console.log('starting mongodb...');
	return client.connect();
}

export default client.db();
