var BASE_URL = 'http://127.0.0.10/mobile/api/';
var USER_ID = 'eoPcrvAqgdr4I8S4ZDmU1g==';//null;
var IV = 'X2SiI5FjzwRsXnfNgP6CLQ==';//null;
var USER_TOKEN = '0c449d095438877bbac879f8090f716f75521f93ff3eaadccded025da3b009bd';//null;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Padidar',
    // App id
    id: 'ir.smgroup',
    // Enable swipe panel
    panel: {
        swipe: 'right',
    },
    // Add default routes
    routes: [
        {
            name: 'about',
            path: '/about/',
            templateUrl: './about.html',
        },
        {
            name: 'index',
            path: '/index/',
            templateUrl: './index.html',
        },
        {
            name: 'map',
            path: '/map/',
            templateUrl: './map.html',
        },
        {
            name: 'menu',
            path: '/menu/',
            templateUrl: './menu.html',
        },
        {
            name: 'splash',
            path: '/splash/',
            templateUrl: './splash.html',
        },
        {
            name: 'video',
            path: '/video/',
            templateUrl: './video.html',
        },
    ],
});

$(document).ready(function () {

});

