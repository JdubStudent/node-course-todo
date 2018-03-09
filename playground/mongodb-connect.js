// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';



MongoClient.connect(url, (error, client) => {
  const db = client.db(dbName);
  console.log('isConnected: ', client.isConnected(dbName));

  if (client.isConnected(dbName)) {
    db.collection('Users', undefined, (error, collection) => {

      // if (error) return console.log(error);

      // collection.insertOne({
      //   name: 'Sarah Winfrey',
      //   age: 26,
      //   location: 'Gilbert, AZ'
      // }, (error, result) => {
  
      //   if(error) return console.log('Unable to insert User', error);
        
      //   console.log('', JSON.stringify(result.ops, undefined, 2));
      //   console.log(result.ops[0]._id.getTimestamp());
      // });
    });
  
  
    client.close(false, () => {
      console.log('Closing db connection');
    });
  }
  
});

// MongoClient.connect(url, (error, client) => {
//   const db = client.db(dbName);
//   // console.log('isConnected: ', client.isConnected(dbName));

//   if (client.isConnected(dbName)) {
//     db.collection('Todos', undefined, (error, collection) => {

//       if (error) return console.log(error);
//       collection.insertOne({
//         text: 'Complete INLO',
//         completed: false
//       }, (error, result) => {
  
//         if(error) return console.log('Unable to insert TODO', error);
        
//         console.log('', JSON.stringify(result.ops, undefined, 2));
//       });
//     });
  
  
//     client.close(false, () => {
//       console.log('Closing db connection');
//     });
//   }
  
// });