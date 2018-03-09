// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const collectionName = 'Todos';//'Users';


MongoClient.connect(url, (error, client) => {
  const db = client.db(dbName);
  console.log('isConnected: ', client.isConnected(dbName));

  if (client.isConnected(dbName)) {
    db.collection(collectionName, undefined, (error, collection) => {

      if (error) {
        console.log('Error connecting to collection', error);
        closeClient(client);
        return;
      }

      // collection.find({
      //   _id: new ObjectID('5aa1d7d7c88a3edda67d9bb5')
      // })
      collection.deleteOne({
        text: 'Eat dinner',
        completed: false
      })
      .then((result) => {
        console.log(`Result: ${result}`);
        closeClient(client);
      })
      .catch((error) => {
        console.log('Error running find query');
        closeClient(client);
      });
    });
  
  }
  
});

var closeClient = (client) => {
  setTimeout(() => {
    client.close(false, () => {
      console.log('Closing db connection');
    });
  }, 10);
}
