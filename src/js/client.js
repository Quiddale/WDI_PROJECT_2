// console.log('client log!');
// var geojson = {
//   type: 'FeatureCollection',
//   features: []
// };
// $(init);
//
// function init() {
//   mapboxgl.accessToken = 'pk.eyJ1IjoicXVpZGRhbGUiLCJhIjoiY2o1aWo1bDFvMXc1MDMybGRsNXEwMjg2byJ9.PMC4oYkMmQY5r7n9BvJrbA';
//   var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/quiddale/cj5jgnxb80map2sm6jnqbxjwp',
//     center: [-96, 37.8],
//     zoom: 5
//   });
//
//   $
//   .get(`${window.location.origin}/icons`)
//   .then(data => {
//     // read about
//     for(var i=0; i< data.length; i++){
//
//       geojson.features.push({
//         type: 'Feature',
//         geometry: {
//           type: 'Point',
//           coordinates: [data[i].Lat, data[i].Lng]
//         },
//         properties: {
//           title: data[i].title,
//           icon: data[i].icon
//         }
//       });
//     }
//     console.log(geojson);
//     console.log(geojson.features[0].geometry.coordinates);
//
//
//     var el = document.createElement('div');
//     el.className = 'marker';
//
//     geojson.features.forEach(function(marker) {
//       // create a HTML element for each feature
//       console.log(marker.geometry.coordinates);
//       // make a marker for each feature and add to the map
//       new mapboxgl.Marker(el,{ offset: [-100 / 2, -100 / 2] })
//       .setLngLat(marker.geometry.coordinates)
//       .addTo(map);
//     });
//
//   });
// }
