angular.module('juke')
  .config(function($stateProvider){
  	$stateProvider.state('newPlaylist', {
  		url: '/playlists/new',
  		templateUrl: '/js/playlist/templates/playlists.html',
  		controller: 'newPlaylistCtrl'
  	});
  });