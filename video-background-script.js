(function () {
    'use strict';
    /*
        This is the code that handles our background video rotation, etc.
    */


    var videos = [
        {
            name: 'Kau on a swing',
            url: '/videos/kau-on-a-swing.mp4'
        },
        {
            name: 'Joe cannonball',
            url: '/videos/joe-cannon-ball.mp4'
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
            url: '/videos/dragon-xign.mp4'
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
        ;

    }
    console.log(randomizeVideos(videos));
    $('body').css({'background': videos});
})();
