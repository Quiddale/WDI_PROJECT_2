const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');

const dbURL       = process.env.MONGODB_URI || 'mongodb://localhost/i-movie-db';
mongoose.connect(dbURL);

const User = require('../models/user');

User.collection.drop();
// seeding two users
User
  .create([{
    username: 'James',
    email: 'James@gmail.com',
    password: 'password'

  },{
    username: 'Quiddale',
    email: 'qosullivan962@gmail.com',
    password: 'password'

  }])
.then((users) => {
  console.log(`${users.length} users created!`);
})

.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});
