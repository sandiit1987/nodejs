var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoapp", function(error, db){
  if(error){
    return console.log("Unable to connect");
  }
  console.log("Connected...");
  db.collection("users").find({ _id: new ObjectID("580c61a28eedfe166c44583d") }).count().then(function(c){
    console.log(c);
  }, function(error){

  });
  db.close();
});
