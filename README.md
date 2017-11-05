# Super Hero

Check out the live version of the app here -> https://pacific-ravine-87313.herokuapp.com/

Briefed with building an app using MongoDB, Express and Node.js, I chose to make something that would show New from a different perspective. This being from the view point of the superhero. For this is used Map APIs, and wanted to use marvels API but found that I had to use develop my own data base of the superheros. This was a great opportunity to work with different set of data. 

Built with:  jQuery,scss, MongoDB, Node.js, Express, HTML, Bcrypt, JWT

---
**Mapbox API**

The Mapbox Maps API supports reading raster tilesets, vector tilesets, and Mapbox Editor? project features. Tilesets can be retrieved as images, TileJSON, or HTML slippy maps for embedding. Mapbox Editor project features can be retrieved as GeoJSON. 

```
<div id='map' style='width: 90%; height: 900px;margin:0 auto;padding-top:10%'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoicXVpZGRhbGUiLCJhIjoiY2o1aWo1bDFvMXc1MDMybGRsNXEwMjg2byJ9.PMC4oYkMmQY5r7n9BvJrbA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/quiddale/cj5jgnxb80map2sm6jnqbxjwp',
  center: [-96, 37.8],
  zoom: 3
});
//DATA
var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "Daredevil_45_1968",
        "description": "Since the early 1940s it has been the site of many confrontations among many of New York City's super-human population.",
        "number": 1,
        "name": "Daredevil"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0445,
          40.6892
        ]
      }
    },
```

---

**Marvel API**

For this I had to create my own data base. Where I would place the information where I would locat the super on it Ln and Lt. Then onlick return information about which superhero story had started there.

```
.then(() => {
  return Icon
  .create([{
    // empire state building
    title: 'spider man',
    issueNumber: '',
    image: 'images/Spider-Man-Central-Park.jpeg',
    Lat: 40.730610,
    Lng: -73.935242
  }
```
```
const mongoose = require('mongoose');

const iconSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issueNumber: { type: String },
  image: { type: String },
  Lat: { type: String, required: true },
  Lng: { type: String, required: true }
});

module.exports = mongoose.model('Icon', iconSchema);
```
---

![alt text](https://i.imgur.com/zdlUN68.png "Collision Course Screengrab")

---

**Built with**: jQuery, MongoDB, Node.js, Express, HTML, Bcrypt, JWT, and Mapbox API

---
All projects and my details can be found here -> www.qosullivan.com