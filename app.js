const mongoose = require("mongoose");

// Connection URL
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10},
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const strawberry = new Fruit ({
  name: "Strawberry",
  rating: 10,
  review: "Very Juicy"
});

strawberry.save()
// fruit.save();



//
//
const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

// const people = new People ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });

// people.save();
//

People.find(function(err, people){
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    people.forEach(people => console.log(people.name));
  }
});

People.updateOne({name: "John" }, {favoriteFruit: strawberry}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("succesfully updated!")
    // mongoose.connection.close()
  }
} )
