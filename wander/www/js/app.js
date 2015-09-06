// Wander App

wanderApp = angular.module('wander', ['ionic']);

wanderApp.controller('FeatureListCtrl', ['$scope', '$filter', '$state', function($scope, $filter, $state) {
  $scope.features = [
    { "id": 1, "name": "Waves", "image": "img/thumb-surf.png" },
    { "id": 2, "name": "Deserts", "image": "img/thumb-desert.png" },
    { "id": 3, "name": "Adventure", "image": "img/thumb-touring.png" },
    { "id": 4, "name": "Relaxation", "image": "img/thumb-canal.png" },
    { "id": 5, "name": "Waves", "image": "img/thumb-surf.png" },
    { "id": 6, "name": "Deserts", "image": "img/thumb-desert.png" },
    { "id": 6, "name": "Deserts", "image": "img/thumb-desert.png" },
    { "id": 6, "name": "Deserts", "image": "img/thumb-desert.png" },
    { "id": 6, "name": "Deserts", "image": "img/thumb-desert.png" },
    { "id": 6, "name": "Deserts", "image": "img/thumb-desert.png" }
  ];

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
    // results = getMemes(keywords);
    // .then/.success/.catch navigate programmatically to next view
    // $location.path("/suggestions");
    $state.go('results');
  }
}]);

wanderApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('index', {
    url: '/',
    templateUrl: '../feature-list.html'
  }).state('results', {
    url: '/results',
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
