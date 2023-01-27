const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  "mongodb+srv://kallieog:admin@cluster0.nn2wipc.mongodb.net/socialMediaDB?retryWrites=true&w=majority"|| process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialMediaDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;