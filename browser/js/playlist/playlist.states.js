angular.module('juke')
  .config(function($stateProvider){
  	$stateProvider
  		.state('newPlaylist', {
	  		url: '/playlists',
	  		templateUrl: '/js/playlist/templates/playlists.html',
	  		controller: 'newPlaylistCtrl'
	  	}) 
		.state('newPlaylist.playlistView', {
	  		url: '/:id', 
	  		templateUrl: '/js/playlist/templates/playlist.html'
	  	}); 
  });