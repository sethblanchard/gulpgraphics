var $ = require('jquery');
var _ = require('underscore');
var template = require('./tmpl/person');

var people = [
	{ name: "Dan Tello", photo: "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10844010_1377685569194141_99570041_a.jpg"},
	{ name: "Dan Tello", photo: "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10844010_1377685569194141_99570041_a.jpg"},
	{ name: "Dan Tello", photo: "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10844010_1377685569194141_99570041_a.jpg"},
	{ name: "Dan Tello", photo: "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10844010_1377685569194141_99570041_a.jpg"},
	{ name: "Dan Tello", photo: "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10844010_1377685569194141_99570041_a.jpg"},
	{ name: "Dan Tello", photo: "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10844010_1377685569194141_99570041_a.jpg"},
	{ name: "Bekah Tello", photo: "https://instagramimages-a.akamaihd.net/profiles/profile_7527864_75sq_1365468949.jpg"},
	{ name: "Seth Blanchard", photo: "https://instagramimages-a.akamaihd.net/profiles/profile_32371451_75sq_1367079635.jpg"},
	{ name: "Seth Blanchard", photo: "https://instagramimages-a.akamaihd.net/profiles/profile_32371451_75sq_1367079635.jpg"},
	{ name: "Seth Blanchard", photo: "https://instagramimages-a.akamaihd.net/profiles/profile_32371451_75sq_1367079635.jpg"},
	{ name: "Seth Blanchard", photo: "https://instagramimages-a.akamaihd.net/profiles/profile_32371451_75sq_1367079635.jpg"},
	{ name: "Jess Blanchard", photo: "https://instagramimages-a.akamaihd.net/profiles/profile_33540813_75sq_1360425371.jpg"}
];
	
$('#content').append(template({people: people}));