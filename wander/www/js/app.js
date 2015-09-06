// Wander App

wanderApp = angular.module('wander', ['ionic']);

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

wanderApp.controller('ResultsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.results = $rootScope.results;
}]);

wanderApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('index', {
    url: '/',
    controller: 'FeatureListCtrl',
    templateUrl: '../feature-list.html'
  }).state('results', {
    url: '/results',
    controller: 'ResultsCtrl',
    templateUrl: '../results.html'
  })
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
