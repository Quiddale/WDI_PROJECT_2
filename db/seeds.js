const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');
const env = require('../config/env');

mongoose.connect(env.db);

const User = require('../models/user');
const Icon = require('../models/icon');

User.collection.drop();
Icon.collection.drop();
// seeding two users
User
  .create([{
    username: 'James',
    email: 'James@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'

  },{
    username: 'Quiddale',
    email: 'qosullivan962@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'

  }])
.then((users) => {
  console.log(`${users.length} users created!`);
})
.then(() => {
  return Icon
  .create([{
    // empire state building
    title: 'spider man',
    issueNumber: '',
    image: 'images/Spider-Man-Central-Park.jpeg',
    Lat: 40.730610,
    Lng: -73.935242
  },{
    // times square
    title: 'spider man',
    issueNumber: '',
    image: 'images/Spiderman-Times-Square.jpeg',
    Lat: 40.7829,
    Lng: -73.9654
  },{
    // statue of liberty
    title: 'dare devil',
    issueNumber: '',
    image: 'images/daredevil-45-1968.jpeg',
    Lat: '40.6892',
    Lng: '-73.0445'
  },{
    // central park
    title: 'dare devil',
    issueNumber: '3',
    image: 'images/daredevil-Vol-1-111.jpeg',
    Lat: '40.7829',
    Lng: '-73.9654'
  },{
    // one world trade  center
    title: 'the juggernaut destroyed the world trade center',
    issueNumber: '150',
    image: 'images/e1_One World Trade Center.jped',
    Lat: '40.7127',
    Lng: '-74.0134'
  },{
    // grand central
    title: 'spider-man: homecoming',
    issueNumber: '160',
    image: 'images/f1_grand central station.jpg',
    Lat: '40.7527',
    Lng: '-73.9772'
  },{
    // theatre district
    title: 'Theatre District',
    issueNumber: '',
    image: 'images/H1_Theatre District.png',
    Lat: '40.7870',
    Lng: '-73.9754'
  },{
    // chelsea
    title: 'Chelsea',
    issueNumber: '',
    image: 'images/I1_Chelsea.jpg',
    Lat: '40.7465',
    Lng: '-74.0014'
  },{
    // chrysler
    title: 'the amazing spider-man',
    issueNumber: '100',
    image: 'images/J1_Chrysler.jpg',
    Lat: '40.7516',
    Lng: '-73.9755'
  },{
    // metropolitan museum of art
    title: 'spider-man and red sonja',
    issueNumber: '200',
    image: 'images/K1_Metropolitan_Art_Museum_Human_Fly_Vol_1_8.jpg',
    Lat: '40.7794',
    Lng: '-73.9632'
  },{
    // Manhattan
    title: 'The amazing spider-man in his first full-length novel mayhem in manhattan',
    issueNumber: '201',
    image: 'images/L1_Manhattan.jpg',
    Lat: '40.7831',
    Lng: '-73.9712'
  },{
    // Brooklyn
    title: 'Marvel Knights Spider-Man 5 Venomous Part One',
    issueNumber: '5',
    image: 'images/M1_Brooklyn.jpg',
    Lat: '40.6782',
    Lng: '-73.9442'
  },{
    // Brooklyn bridge
    title: 'The Night Gwen Stacy Died',
    issueNumber: '121',
    image: 'images/O1_Brooklyn Bridge.jpg',
    Lat: '40.7061',
    Lng: '-73.9969'
  }
  ]);
})
.then((icons) => {
  console.log(`${icons.length} icons created!`);
})

// .catch((err) => {
//   console.log(err);
// })
.finally(() => {
  mongoose.connection.close();
});
