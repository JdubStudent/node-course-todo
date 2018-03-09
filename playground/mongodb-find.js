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
      collection.find({
        completed: false
      })
      .count()
      // .toArray()
      // .then((docs) => {
      //   console.log('Todos');
      //   console.log(JSON.stringify(docs, undefined, 2));
      //   // console.log(docs.length());
      //   closeClient(client);
      // })
      .then((count) => {
        console.log(`Count: ${count}`);
        closeClient(client);
      })
      .catch((error) => {
        console.log('Error running find query');
        closeClient(client);
      });
    });
  
    
    // client.close(false, () => {
    //   console.log('Closing db connection');
    // });
  }
  
});

var closeClient = (client) => {
  setTimeout(() => {
    client.close(false, () => {
      console.log('Closing db connection');
    });
  }, 10);
}
