var images = ["img/car.jpg", "img/hand.jpg", "img/heart.jpg", "img/tiger.jpg"]; // Image srcs were out of order, which caused the wrong image to be displayed when a thumbnail was clicked. 
var currentImage = 0;

function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

function nextImage(){
	currentImage++;
	if (currentImage === images.length){
		currentImage = 0;
	}
	var img = document.getElementById('mainImage');	
	img.setAttribute('src', images[currentImage]);
}

function prevImage() {
	currentImage = currentImage -1;
		if (currentImage == -1){
		currentImage = images.length -1; // This line is saying, if we're at image 0 and we're trying to go to an image before that one, set currentImage to the lenght of our 'images' array -1. Since the lenght of our images array is 4, we'll be setting 'current image' to 3, which is the index of the last image in our array. By writing our code like this (i.e. not hard-coding in a value like currentImage = 3), we can add as many images to our array as we want. Then, when we're on image 0 and we hit the previous button, we'll allways be setting 'currentImage' to the index of the last item in our array. Does that make sense? 
	}
	var img = document.getElementById('mainImage');	
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