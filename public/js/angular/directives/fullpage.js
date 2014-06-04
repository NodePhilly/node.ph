angular.module('nodeapp')
.directive('npFullPage', function($timeout){
  return{
    restrict:'A',
    link: function(scope, element, attrs){
        element.fullpage({navigation:true});
    }
  }
});
