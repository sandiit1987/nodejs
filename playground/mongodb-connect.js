var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/todoapp", function(error, db){
  if(error){
    return console.log("Unable to connect");
  }
  console.log("Connected...");
  db.collection("users").insertOne({
    name: "deep",
    city: "kolkata"
  }, function(error, result){
    if(error){
      return console.log("Not inserted");
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
