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

$(function(){watchSubmit();});
