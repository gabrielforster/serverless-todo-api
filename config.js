module.exports.fetchMongoUrl = () => {
  console.log(process.env.MONGODB_URI)
  return process.env.MONGODB_URI;
}