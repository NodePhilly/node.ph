angular.module('nodeapp')
.directive('npFullPage', function($timeout){
  return{
    restrict:'A',
    link: function(scope, element, attrs){
        $("#fullpage").fullpage({navigation:true});
    }
  }
});
