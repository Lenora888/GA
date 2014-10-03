var myPictures = [
	"img/cats.jpg",
	"img/centralpark.jpg",
	"img/colors.jpg",
	"img/fall.jpg",
	"img/goldball.jpg",
	"img/heart.jpg",
	"img/horse.jpg",
	"img/madpark.jpg",
	"img/nyc.jpg",
	"img/road.jpg",
	"img/tattoogirl.jpg",
	"img/traintunnel.jpg",
	"img/tree.jpg",
	"img/washingtonsquare.jpg",
	"img/wine.jpg",
	"img/yellowbrickroad.jpg"
	];
var viewedImg = 0;

var img = document.getElementById('bigImg');
img.src = myPictures[viewedImg];

function newPic(whatNewPic) {
	var newPhoto = document.getElementById(whatNewPic).src;
	document.getElementById("bigImg").src = newPhoto;
	viewedImg = whatNewPic;
}

function forwardPic( ){
	viewedImg ++;
	if (viewedImg===myPictures.length){
		viewedImg = 0;
	};
	var img = document.getElementById('bigImg');
	img.src = myPictures[viewedImg];		
}

function backPic( ){
	viewedImg = viewedImg -1;
	if (viewedImg ===-1){
		viewedImg = myPictures.length -1;
	};
	var img = document.getElementById('bigImg');
	img.src = myPictures[viewedImg];	
}
