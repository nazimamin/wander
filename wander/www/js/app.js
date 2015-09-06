// Wander App

wanderApp = angular.module('wander', ['ionic', 'uiGmapgoogle-maps', 'ionic-datepicker']);

wanderApp.controller('FeatureListCtrl', ['$scope', '$rootScope', '$filter', '$state', function($scope, $rootScope, $filter, $state) {
  $scope.features = answersObject;
  $scope.minToSelect = 3;

  $scope.minSelected = function() {
    return ($scope.getSelectedFeatures().length >= 3) ? true : false;
  }

  $scope.getSelectedFeatures = function() {
    return $filter('filter')($scope.features, { isSelected: "true" });
  }

  $scope.toggleSelected = function(feature) {
    feature.isSelected = !feature.isSelected;
  }

  $scope.continue = function() {
    var keywords = [],
        selectedFeatures = $scope.getSelectedFeatures();
    for (index in selectedFeatures) {
      keywords.push(selectedFeatures[index]['name']);
    };
    // update user's selected features
    $rootScope.results = getResults(keywords);
    // .then/.success/.catch navigate programmatically to next view
    // $location.path("/suggestions");
    $state.go('results');
  }
}]);

wanderApp.controller('ResultsCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
  $scope.results = $rootScope.results;

  $scope.book = function(result) {
    $rootScope.destination = result[0];
    $state.go('book');
  }
}]);

wanderApp.controller('BookingCtrl', ['$scope', '$rootScope', '$http', 'uiGmapGoogleMapApi', function($scope, $rootScope, $http, uiGmapGoogleMapApi) {
  $scope.city = $rootScope.destination;

  $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + $scope.city + '&sensor=true&key=AIzaSyDa4S4iLNsRMG1C0ommlDMufI-cESxA9KQ')
    .then(function(response) {
      $scope.latitude = response['data']['results'][0]['geometry']['location']['lat'];
      $scope.longitude = response['data']['results'][0]['geometry']['location']['lng'];

      uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = { center: { latitude: $scope.latitude, longitude: $scope.longitude }, zoom: 13 };
      });

    }, function(response) {
      alert("Could not geocode.");
    });

    $scope.departureSet = false;
    $scope.returnSet = false;

    $scope.departureIsSet = function() {
      return ($scope.departureSet) ? true : false;
    }

    $scope.returnIsSet = function() {
      return ($scope.returnSet) ? true : false;
    }

    var departureDatepickerCallback = function (val) {
      if (typeof(val) === 'undefined') {
        console.log('No date selected');
        $scope.departing = val;
        $scope.departureSet = false;
      } else {
        console.log('Selected date is : ', val)
        $scope.departing = val;
        $scope.departureSet = true;
      }
    };

    var returnDatepickerCallback = function (val) {
      if (typeof(val) === 'undefined') {
        console.log('No date selected');
        $scope.returning = val;
        $scope.returnSet = false;
      } else {
        console.log('Selected date is : ', val)
        $scope.returning = val;
        $scope.returnSet = true;
      }
    };

    $scope.departureDatepicker = {
      inputDate: new Date(),
      callback: function (val) {
        departureDatepickerCallback(val);
      }
    };

    $scope.returnDatepicker = {
      inputDate: new Date(),
      callback: function (val) {
        returnDatepickerCallback(val);
      }
    };
}]);

wanderApp.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('index', {
    url: '/',
    controller: 'FeatureListCtrl',
    templateUrl: '../feature-list.html'
  }).state('results', {
    url: '/results',
    controller: 'ResultsCtrl',
    templateUrl: '../results.html'
  }).state('book', {
    url: '/book',
    controller: 'BookingCtrl',
    templateUrl: '../book.html'
  });

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyDa4S4iLNsRMG1C0ommlDMufI-cESxA9KQ',
    v: '3.2.0'
  });
});

wanderApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
