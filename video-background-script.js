(function () {
    'use strict';
    /*
        This is the code that handles our background video rotation, etc.
    */

    var state = {
    };
    var videos = [
        {
            name: 'Kau on a swing',
            url: '/videos/kau-on-a-swing.mp4'
        },
        {
            name: 'Joe cannonball',
            url: '/videos/joe-cannonball.mp4'
        },
        {
            name: 'Mikey opens a beer',
            url: '/videos/mikey-beer-open.mp4'
        },
        {
            name: 'Kau dismounts the carousel',
            url: '/videos/kau-dismount.mp4'
        },
        {
            name: 'Blue Martins at dusk',
            url: '/videos/blue-martins.mp4'
        },
        {
            name: 'Fire pit',
            url: '/videos/fire-pit.mp4'
        },
        {
            name: 'Minnesota lake fly over',
            url: '/videos/minnesota-lake.mp4'
        },
        {
            name: 'Owl landing at Sherwood',
            url: '/videos/owl-landing.mp4'
        },
        {
            name: 'Mikey casting a standard rod',
            url: '/videos/mikey-cast.mp4'
        },
        {
            name: 'Joust at Lysts on the Lake',
            url: '/videos/joust-lysts.mp4'
        },
        {
            name: 'Hawk landing at Sherwood',
            url: '/videos/hawk-landing.mp4'
        },
        {
            name: 'Dragon X-ing at Sherwood',
            url: '/videos/dragon-xing.mp4'
        },
        {
            name: 'Kau bocce toss',
            url: '/videos/bocce-toss.mp4'
        }
    ];

    function randomizeVideos(videos) {
        var randomizedVideos = [],
            randomVideo,
            randomIndex,
            i,
            videoCount,
            workingVideos;

        workingVideos = videos.slice(0);
        videoCount = workingVideos.length;
        for (i = 0; i < videoCount; i += 1) {
            randomIndex = Math.floor(Math.random() * workingVideos.length);
            randomVideo = workingVideos.splice(randomIndex, 1)[0];
            randomizedVideos.push(randomVideo);
        }

        return randomizedVideos;
    }


/*
notes:

var player1 = document.getElementById('video-background1');
var activeVideo1 = document.getElementById('active-video1');

activeVideo1.src = myvideos[index].url;
player1.load();
player1.play();

player1.removeEventListener('ended', listener?listener:0);


Assignment:

Create a function called initialize background videos.

Function should call randomizeVideos to get a list of random videos,
it should also take first video in new stack & set url/play first video
in video element on homepage.

Don't worry about auto advance for now.

Call initialize task.
set timeout for the duration of the video on timeout I call next video.



*/

    function initializeBackgroundVideos(videos) {
        state.currentlyPlayingVideoIndex = 0;
        state.numberOfVideos = videos.length;
        state.randomizedVideos = randomizeVideos(videos);
        state.player1 = document.getElementById('video-background1');
        state.activeVideo1 = document.getElementById('active-video1');
        state.player2 = document.getElementById('video-background2');
        state.activeVideo2 = document.getElementById('active-video2');

        state.player1.addEventListener('loadeddata', onPlayer1LoadedData);
        state.player2.addEventListener('loadeddata', onPlayer2LoadedData);
        // state.player1.addEventListener('ended', nextVideo);

        loadVideo(state.player1, state.activeVideo1);

    }

    initializeBackgroundVideos(videos);

    function loadVideo(player, activeVideo) {
        var url = state.randomizedVideos[state.currentlyPlayingVideoIndex].url;
        player.pause();
        activeVideo.src = url;
        player.load();
        player.play();
    }

    function setNextVideoIndex(){
        state.currentlyPlayingVideoIndex  += 1;
        if (state.currentlyPlayingVideoIndex >= state.numberOfVideos) {
            state.currentlyPlayingVideoIndex = 0;
        }
    }
    function player1LoadNextVideo(){
        setNextVideoIndex();
        loadVideo(state.player2, state.activeVideo2);
        showVideo2();

    }
    function player2LoadNextVideo(){
        setNextVideoIndex();
        loadVideo(state.player1, state.activeVideo1);
        hideVideo2();

    }

    function showVideo2(){
        state.player2.style.opacity = 1;
    }
    function hideVideo2(){
        state.player2.style.opacity = 0;
    }

    function onPlayer1LoadedData() {
        var currentlyPlayingVideoDuration = state.player1.duration;
        var cutoffTime = (currentlyPlayingVideoDuration - 1) * 1000;
        window.setTimeout(player1LoadNextVideo, cutoffTime);

    }

    function onPlayer2LoadedData() {
        var currentlyPlayingVideoDuration = state.player2.duration;
        var cutoffTime = (currentlyPlayingVideoDuration - 1) * 1000;
        window.setTimeout(player2LoadNextVideo, cutoffTime);

    }

})();
