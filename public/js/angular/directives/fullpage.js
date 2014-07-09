angular.module('nodeapp')
.directive('npFullPage', function($timeout){
  return{
    restrict:'A',
    link: function(scope, element, attrs){
        $("#fullpage").fullpage({easing:'linear',
         scrollingSpeed:400,
         slidesColor:['black', '#cccccc']});
    }
  }
}).directive('npContactSection', function(){
	return{
		restrict:'A',
		templateUrl: '/contact',
		controller: 'ContactCtrl'
	}
});
