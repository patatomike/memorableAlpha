angular.module('App')
  .factory('serviceMap', function serviceMap($http) {
    return{
          getPlaces: function(page){
              return $http.get("https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/2000");
          }
      }
  });
