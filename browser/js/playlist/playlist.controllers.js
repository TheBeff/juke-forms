angular.module("juke")
  .controller('newPlaylistCtrl', function($scope, PlaylistService, $log){
  	
  	$scope.create = function(){
  		PlaylistService.create({name: $scope.name})
  		.then(function(newPlaylist){
  			console.log('new playlist named ' + $scope.name + ' created')
  			$scope.name = ''
  		})
  		.catch($log.error); 
  	}; 

  	$scope.findById = function(playlist){
  		PlaylistService.findById(playlist)
  		.then(function(playlist){
  			
  		})
  	}

  });