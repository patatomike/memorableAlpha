angular.module('App')
  .factory('serviceMap', function serviceMap($http) {
    return{
          getPlaces: function(page){
              return $https.get("https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/2000");
          }
      }
  });
