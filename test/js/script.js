$(document).ready(function(){


	$(window).scroll(function() {
	  var theta = 0.01*$(window).scrollTop() % Math.PI;
	  $('#record').css({ transform: 'rotate(' + theta + 'rad)' });
	});


	var spotifyApi = new SpotifyWebApi();
	spotifyApi.setAccessToken('BQA7AZvUJv1V4fyOwqLABPjTFK3401l3Nbnl4lLd2w7AnlouU4Ahhp8pGdWYJOy0QO6ruEQrUEzVaz8EfcYCpQr-0RKkqkskW4CxKqh2WG3MGNh3M3F8efbezqI6sq5O_ouW1_Pw1bA');

	
	spotifyApi.getAlbum('33YUhFYzDdg3PmQSutGXkZ', function (err, data) {
	  if (err) {
	  	console.error(err);
	  }else {
	  	console.log('Album Data', data);
	  	let tracks = data.tracks.items;
	  	tracks.forEach( t => {
	  		$('#tracks').append(`<div class="track" data-preview="${t.preview_url}">${t.name}</div>`);
	  	});


	  		$('.track').on('click', function(){
	  			console.log('play');
	  			let preview = $(this).data('preview');
	  			let audioObject = new Audio(preview);
	  	        audioObject.play();
	  	        $(this).addClass('playing');
	  		});
	  }
	});




});

