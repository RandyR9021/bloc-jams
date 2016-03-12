// Example Album

var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
};

// Another Example Album
var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

// 3rd example album
 var albumBillyJoel = {
     name: 'Piano Man',
     artist: 'Billy Joel',
     label: 'Columbia',
     year: '1970',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Piano Man', length: '5:26' },
         { name: 'Captain Jack', length: '4:14' },
         { name: 'Just the way you are', length: '6:01' },
         { name: 'Uptown Girl', length: '4:21'},
         { name: 'The Longest Time Spent', length: '3:15'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      +  ' <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);
    
     var clickHandler = function() {
         var songNumber = $(this).attr('data-song-number');

	if (currentlyPlayingSong !== null) {
		// Revert to song number for currently playing song because user started playing new song.
		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		currentlyPlayingCell.html(currentlyPlayingSong);
	}
	if (currentlyPlayingSong !== songNumber) {
		// Switch from Play -> Pause button to indicate new song is playing.
		$(this).html(pauseButtonTemplate);
		currentlyPlayingSong = songNumber;
	} else if (currentlyPlayingSong === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
		currentlyPlayingSong = null;
	}
};
     };
    
      var onHover = function(event) {
         var songNumberCell = $(this).find('.song-item-number');
         var songNumber = songNumberCell.attr('data-song-number');
         
          if (songNumber !== currentlyPlayingSong) {
             songNumberCell.html(playButtonTemplate);
         }
     };
    
     var offHover = function(event) {
         var songNumberCell = $(this).find('.song-item-number');
         var songNumber = songNumberCell.attr('data-song-number');
         
         if (songNumber !== currentlyPlayingSong) {
             songNumberCell.html(songNumber);
         }
     
     };
    
    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;
};
    

var setCurrentAlbum = function(album) {
     // #1
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3
     $albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append)($newRow);
     }
 };


// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span/a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
var currentlyPlaying = null;
 
$(document).ready(function() {
     setCurrentAlbum(albumPicasso);
     
});
     
     var albums = [albumPicasso, albumMarconi, albumBillyJoel];
     var index = 1;
     albumImage.addEventListener("click", function(event) {
         setCurrentAlbum(albums[index]);
         index++;
         if (index == albums.length) {
             index = 0;
         }
     });
 };
