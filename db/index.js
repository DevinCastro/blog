// replace <db_name> with your database
module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/blog_db', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})