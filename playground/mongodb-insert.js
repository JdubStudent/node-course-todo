const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const collectionName = 'Todos';//'Users';

MongoClient.connect(url, (error, client) => {
  const db = client.db(dbName);
  // console.log('isConnected: ', client.isConnected(dbName));

  if (client.isConnected(dbName)) {
    db.collection(collectionName, undefined, (error, collection) => {

      if (error) return console.log(error);
      collection.insertOne({
        text: 'Win Lottery!',
        completed: false
      }, (error, result) => {
  
        if(error) return console.log('Unable to insert TODO', error);
        
        console.log('', JSON.stringify(result.ops, undefined, 2));
      });
    });
  
  
    client.close(false, () => {
      console.log('Closing db connection');
    });
  }
  
});