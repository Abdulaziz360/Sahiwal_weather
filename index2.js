const sdk = require('api')('@climacell-docs/v4.0.1#w8bjo1ilf6r6prj');

sdk.auth('4XXgOggw0aLAG3ZKin0Ibc13cncA07cq');
sdk.realtimeWeather({location: 'Sahiwal'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));