import { startMongo } from '$db/mongo';

startMongo().then((client) => {
	console.log('mongodb started');
});
