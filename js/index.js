/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      // angular.element(document).ready(function() {
      //   angular.bootstrap(document);
      // });
        app.receivedEvent('deviceready');

     },
    // Update DOM on a Received Event
    receivedEvent: function(id) {


        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 1.290299, lng: 103.850143}
          });

        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

        var onSuccess = function(position) {
        console.log('Latitude: '          + position.coords.latitude          + '\n' +
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


        console.log('Received Event: ' + id);
    }
};
