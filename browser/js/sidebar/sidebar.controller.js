'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistService, $log) {
	PlaylistService.findAll()
	.then(function(playlists){
		$scope.playlists = playlists; 
	})
	.catch($log.error); 
});
