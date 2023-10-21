const mongoose = require('mongoose');
const connectionString = ('mongodb+srv://gofood:gofood5578@cluster0.cyt05sw.mongodb.net/gofoodmern?retryWrites=true&w=majority');
async function mongoDB() {
  try {
    await mongoose.connect(connectionString,{useNewUrlParser: true});
    console.log('Connected to MongoDB');
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray()
    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray()            
      global.foodData = data;
      global.foodCategory = catData;
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}


module.exports = mongoDB; 