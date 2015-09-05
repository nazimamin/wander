// Wander App

angular.module('wander', ['ionic'])

.controller('FeatureCtrl', function($scope) {
  $scope.features = [
    {
      "id": 1,
      "name": "Waves",
      "image": "img/thumb-surf.png"
    },
    {
      "id": 2,
      "name": "Deserts",
      "image": "img/thumb-desert.png"
    },
    {
      "id": 3,
      "name": "Adventure",
      "image": "img/thumb-touring.png"
    },
    {
      "id": 4,
      "name": "Relaxation",
      "image": "img/thumb-canal.png"
    },
    {
      "id": 5,
      "name": "Waves",
      "image": "img/thumb-surf.png"
    },
    {
      "id": 6,
      "name": "Deserts",
      "image": "img/thumb-desert.png"
    },
    {
      "id": 6,
      "name": "Deserts",
      "image": "img/thumb-desert.png"
    },
    {
      "id": 6,
      "name": "Deserts",
      "image": "img/thumb-desert.png"
    }
  ];

  $scope.toggleSelected = function() {
    this.isSelected = !this.isSelected;
  }
})

.run(function($ionicPlatform) {
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
})
