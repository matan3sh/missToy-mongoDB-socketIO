const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

query = async () => {
  const collection = await dbService.getCollection('toy');
  try {
    const toys = await collection.find().toArray();
    return toys;
  } catch (err) {
    console.log('Error cannot find toys');
    throw err;
  }
};

getById = async (id) => {
  const collection = await dbService.getCollection('toy');
  try {
    const toy = await collection.findOne({ _id: ObjectId(id) });
    return toy;
  } catch (err) {
    console.log(`Error While fetching toy with id of ${id}`);
    throw err;
  }
};

remove = async (id) => {
  const collection = await dbService.getCollection('toy');
  try {
    await collection.deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log(`Error While deleteing toy with id of ${id}`);
    throw err;
  }
};

update = async (toy) => {
  const collection = await dbService.getCollection('toy');
  toy._id = ObjectId(toy._id);
  try {
    await collection.replaceOne({ _id: toy._id }, { $set: toy });
    return toy;
  } catch (err) {
    console.log(`Error While updating toy with id of ${id}`);
    throw err;
  }
};

add = async (toy) => {
  const collection = await dbService.getCollection('toy');
  try {
    await collection.insertOne(toy);
    return toy;
  } catch (err) {
    console.log(`Error While adding toy`);
    throw err;
  }
};

module.exports = {
  query,
  add,
  remove,
  update,
  getById,
};
