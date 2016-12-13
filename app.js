var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: YOUTUBE_BASE_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  q: searchTerm,
	  type: 'video',
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}


function displayYOUTUBESearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<p>' + item.snippet.title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYOUTUBESearchData);
  });
}
var YOUTUBE_PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
//Happy button functions
function getPlaylistDataFromApi(callback) {
  var settings = {
    url: YOUTUBE_PLAYLIST_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  playlistId: "PL4ziQDgKv4ErEK9Ey_qziU0IvtXNmwjzO",
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}
function displayResults(data){
	console.log(data);
}
function watchHappyButton(){
	$('.happy').on('click', function(){
		getPlaylistDataFromApi(displayYOUTUBESearchData);
	})
}
//Sad Button Functions
function getPlaylistDataFromApiSad(callback) {
  var settings = {
    url: YOUTUBE_PLAYLIST_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  playlistId: "PLWlTX25IDqIy_HeO8BsOyt0wAhE9No3Nt",
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}
function displayResults(data){
	console.log(data);
}
function watchSadButton(){
	$('.sad').on('click', function(){
		getPlaylistDataFromApiSad(displayYOUTUBESearchData);
	})
}
//Ready for the Weekend Functions
function getPlaylistDataFromApiWeekend(callback) {
  var settings = {
    url: YOUTUBE_PLAYLIST_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  playlistId: "PLMH3ZTvmk7EPkqTwd_ayk742IMJqY1tZb",
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}
function displayResults(data){
	console.log(data);
}
function watchWeekendButton(){
	$('.weekend').on('click', function(){
		getPlaylistDataFromApiWeekend(displayYOUTUBESearchData);
	})
}
//Low-Key Party Functions
function getPlaylistDataFromApiParty(callback) {
  var settings = {
    url: YOUTUBE_PLAYLIST_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  playlistId: "PL5D7fjEEs5yfvPS5Lfb6MB_m07CEeqzjP",
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}
function displayResults(data){
	console.log(data);
}
function watchPartyButton(){
	$('.party').on('click', function(){
		getPlaylistDataFromApiParty(displayYOUTUBESearchData);
	})
}
//Sunday Morning Functions
function getPlaylistDataFromApiSM(callback) {
  var settings = {
    url: YOUTUBE_PLAYLIST_URL,
    data: {
      part: 'snippet',
	  key: 'AIzaSyCNceITgaTDztlB1p3KbBNO_Q04N0Atpxg',
	  playlistId: "PLv5Worys33PnkHXPseocm9ase7isPeBvt",
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}
function displayResults(data){
	console.log(data);
}
function watchSMButton(){
	$('.sunday').on('click', function(){
		getPlaylistDataFromApiSM(displayYOUTUBESearchData);
	})
}

$(function(){
	watchPartyButton();
	watchWeekendButton();
	watchSMButton();
	watchSadButton();
	watchHappyButton();
	watchSubmit();
});
