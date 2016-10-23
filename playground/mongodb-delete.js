var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoapp", function(error, db){
  if(error){
    return console.log("Unable to connect");
  }
  console.log("Connected...");
  db.collection("users").findOneAndDelete({ _id: new ObjectID("580c7cb9b6888f149688c8aa") }).then(function(result){
    console.log(result);
  });
  db.close();
});
