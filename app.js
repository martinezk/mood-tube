var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
var playlistId = '';

function displayYOUTUBESearchData(data) {
  var resultElement = '';
  if (data.items) {
	resultElement = '<div class="video">'+'<iframe src="https://www.youtube.com/embed/videoseries?list='+ playlistId +'" frameborder="0" allowfullscreen></iframe>'+'</div>'
    data.items.forEach(function(item) {
     resultElement += '<p>' + item.snippet.title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  $('.js-search-results').html(resultElement);
}
//<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLPQF7GaDRVK8xdN3d2R0c5R3WkwZh12be" frameborder="0" allowfullscreen></iframe>

var YOUTUBE_PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
//Happy button functions

function watchHappyButton(){
	$('.happy').on('click', function(){
		getPlaylistDataFromApi(displayYOUTUBESearchData, "PL4ziQDgKv4ErEK9Ey_qziU0IvtXNmwjzO");
	})
}
//Sad Button Functions
function watchSadButton(){
	$('.sad').on('click', function(){
		getPlaylistDataFromApi(displayYOUTUBESearchData, "PLWlTX25IDqIy_HeO8BsOyt0wAhE9No3Nt");
	})
}
//Ready for the Weekend Functions

function watchWeekendButton(){
	$('.weekend').on('click', function(){
		getPlaylistDataFromApi(displayYOUTUBESearchData, "PLMH3ZTvmk7EPkqTwd_ayk742IMJqY1tZb");
	})
}
//Party Functions
function watchPartyButton(){
	$('.party').on('click', function(){
		getPlaylistDataFromApi(displayYOUTUBESearchData, "PL5D7fjEEs5yfvPS5Lfb6MB_m07CEeqzjP");
	})
}
//Sunday Morning Functions

function watchSMButton(){
	$('.sunday').on('click', function(){
		getPlaylistDataFromApi(displayYOUTUBESearchData,"PLv5Worys33PnkHXPseocm9ase7isPeBvt");
	})
}
function getPlaylistDataFromApi(callback, id) {
	playlistId = id;
  var settings = {
    url: YOUTUBE_PLAYLIST_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  playlistId: playlistId,
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

$(function(){
	watchPartyButton();
	watchWeekendButton();
	watchSMButton();
	watchSadButton();
	watchHappyButton();
});
