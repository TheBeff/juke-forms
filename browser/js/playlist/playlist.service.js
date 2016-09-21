angular.module('juke')
	.factory('PlaylistService', function($http){

		var _playlists = []; 

		var PlaylistService = {}; 
		PlaylistService.create = function(newPlaylist){
			return $http.post('/api/playlists', newPlaylist)
			.then(function(newPlaylist){
				_playlists.push(newPlaylist.data)
			})
		}; 

		PlaylistService.findAll = function(){
			return $http.get('/api/playlists')
			.then(function(playlists){
				angular.copy(playlists.data, _playlists); 
				return _playlists; 
			}); 
		}; 

		PlaylistService.findById = function(id){
			return $http.get('/api/playlists/' + id)
			.then(function(playlist){
				return playlist.data; 
			}); 
		}


		return PlaylistService; 
	})