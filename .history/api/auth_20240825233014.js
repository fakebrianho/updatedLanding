const { MongoClient } = require('mongodb')
const db_uri =
	'mongodb+srv://admin:srPiJzF8MVXkkqpL@sample-db.tkcfqem.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(db_uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
