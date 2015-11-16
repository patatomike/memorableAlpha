angular.module('App.controllers', [])
    .controller('PointOfInterestsController', function ($scope, serviceMap ,$http) {
        $scope.status = "It works!";

        // call factory to retrieve place nearby
        serviceMap.getPlaces(1.300529,103.861990,2000).success(function(data){
          console.log(data);
        });

        // console.log($http.get('https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/2000'));



        $scope.pointOfInterests = [
              { img: 'https://s3-us-west-1.amazonaws.com/memorable/buddha_tooth_relic_temple_and_museum.jpg', distance: '200m', direction: 'NW' },
              { img: 'https://s3-us-west-1.amazonaws.com/memorable/merlion_park.jpg', distance: '600m', direction: 'NE' },
              { img: 'https://s3-us-west-1.amazonaws.com/memorable/chinatown_singapore.jpg', distance: '100m', direction: 'SW' },
              { img: 'https://s3-us-west-1.amazonaws.com/memorable/marina_bay_sands.jpg', distance: '500m', direction: 'SE' }
            ];


    })
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
