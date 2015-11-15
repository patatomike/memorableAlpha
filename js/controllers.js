angular.module('App.controllers', [])
    .controller('PointOfInterestsController', ['$scope', function ($scope) {
        $scope.status = "It works!";
        $scope.pointOfInterests = [
              { img: 'img/sg-005.jpg', distance: '200m', direction: 'NW' },
              { img: 'http://www.roomsbooking.com/wp-content/uploads/2014/11/Merloin-Park-Singapore.jpg', distance: '600m', direction: 'NE' },
              { img: 'http://www.travelandleisure.com/sites/default/files/styles/weekend_getaways_landing_page/public/singapore19650815-005.jpg?itok=VeA42doQ', distance: '100m', direction: 'SW' },
              { img: 'http://www.roomsbooking.com/wp-content/uploads/2014/11/Singapore-Night-Markets.jpg', distance: '500m', direction: 'SE' }
            ];

      $scope.map = {
          center: {
              latitude:1.274213,
              longitude:103.8420383
          },
          zoom: 12,
          options: {
              scrollwheel: false
          }
      };

    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
