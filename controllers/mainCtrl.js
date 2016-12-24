angular.module('myApp').controller('mainCtrl', function(mainService, $scope, $location, $anchorScroll) {


  $scope.scrollToTop = () => {
    console.log("Go to top!");
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('top');
    // call $anchorScroll()
    $anchorScroll();
  };

  











// END OF CONTROLLER
});
