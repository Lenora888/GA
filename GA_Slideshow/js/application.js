var images = ["img/heart.jpg", "img/car.jpg", "img/hand.jpg", "img/tiger.jpg"]
var currentImage = 0;

function changePicture(whichNum) {
 var img= document.getElementById('mainImage');
 img.setAttribute('src', images[whichNum]);
 currentImage = whichNum;
}

function nextImage (){
 currentImage++;
 if(currentImage===images.length){
 	currentImage = 0;
 }
 var img = document.getElementById('mainImage');	
 img.setAttribute('src', images[currentImage]);
}


function prevImage ( ) {
currentImage= currentImage -1;
 if(currentImage===-1){
 currentImage =0;
}
var img= document.getElementById('mainImage');	
img.setAttribute('src', images[currentImage]);
}

//function forwardPic(){
	//viewedImg ++;
	//if (viewedImg===myPictures.length){
		//viewedImg = 0;
	//};	
//}

//function backPic(){
	//viewedImg = viewedImg -1;
	//if (viewedImg ===-1){
	//	viewedImg = 0;
	//};
//}