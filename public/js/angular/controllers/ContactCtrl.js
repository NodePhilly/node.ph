angular.module('nodeapp').controller('ContactCtrl', ['$scope', function($scope){
	$scope.ContactData = {};

	$scope.ContactData.EmailAddress = "";
	$scope.ContactData.UserMessage = "";
	$scope.ContactData.MaxMessage = 500;
	$scope.ContactData.DisplayMessage = "Hey Bitches";

	$scope.ContactData.Links = [
		{Site: "Twitter", Link: "http://www.twitter.com/NodePhilly", Display: "@NodePhilly"},
		{Site: "GitHub", Link: "http://www.github.com/nodephilly", Display: "Git Hub"}
	];

	$scope.ContactData.DonateButton = {Display: "Donate", Link: "/sponsor"};
}]);
