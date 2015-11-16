angular.module('App.controllers', [])
    .controller('PointOfInterestsController', function ($scope, serviceMap ,$http) {
        $scope.status = "It works!";

        // call factory to retrieve place nearby
        serviceMap.getPlaces(1.300529,103.861990,2000).success(function(data){
          console.log(data);

          // for (var i = 0; i < data.length; i++) {
          //   // data[i].distance
          //   // markers.push(createMarker(data[i].latitude, data[i].longitude, data[i].place, i));
          //   // //  places.push(data[i].place)
          // }
        });


        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 1.290299, lng: 103.850143},
            streetViewControl: false,
            disableDefaultUI: true
          });

        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

        var onSuccess = function(position) {
        console.log('Latitude: '    + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');

              var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

              var image = 'img/TrackingDot.png';
              var marker = new google.maps.Marker({
                position: myLatlng,
                icon: image,
                title:"Hello you!"
            });

            marker.setMap(map);
          };


          function onError(error) {
            console.log('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
          }

          navigator.geolocation.getCurrentPosition(onSuccess, onError);

          map.initialize();



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
