angular.module('App.controllers', [])
    .controller('PointOfInterestsController', function ($scope, serviceMap,$http) {
        $scope.status = "It works!";

        // call factory to retrieve place nearby
        // serviceMap.getPlaces(1.300529,103.861990,2000).success(function(data){
        //   console.log(data);
        // });

        // console.log($http.get('https://memorablebackend.herokuapp.com/api/places/1.300529/103.861990/2000'));



        $scope.pointOfInterests = [
              { img: 'img/sg-005.jpg', distance: '200m', direction: 'NW' },
              { img: 'http://www.roomsbooking.com/wp-content/uploads/2014/11/Merloin-Park-Singapore.jpg', distance: '600m', direction: 'NE' },
              { img: 'http://www.travelandleis  ure.com/sites/default/files/styles/weekend_getaways_landing_page/public/singapore19650815-005.jpg?itok=VeA42doQ', distance: '100m', direction: 'SW' },
              { img: 'http://www.roomsbooking.com/wp-content/uploads/2014/11/Singapore-Night-Markets.jpg', distance: '500m', direction: 'SE' }
            ];


    })
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
