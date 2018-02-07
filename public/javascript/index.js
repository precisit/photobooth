
const hidden_canvas = document.getElementById('canvas'); // Get canvas
const video= document.getElementById('camera-stream')// Get video stream

// Fetch video stream
var promise= navigator.mediaDevices.getUserMedia({ video: true })
	.then(function(stream){
		video.src = window.URL.createObjectURL(stream);
		video.play();
	})
	.catch(function(err){
		console.error(err);
	});

// Fetch the buttons
const take_photo_btn=document.getElementById('take-photo')
const delete_photo_btn=document.getElementById('delete-photo')
const save_photo_btn=document.getElementById('save-photo')

//Function to take snapshot
const takeSnapShot = () => {
	const width= document.getElementById('camera-stream').width; // get width of videostream
	const height= document.getElementById('camera-stream').height;
    const context = hidden_canvas.getContext("2d") // set context
    context.drawImage(video,0,0,width,height) // draw image
    return hidden_canvas.toDataURL("image/png") // return image
}

// Eventlistener for take photo button
take_photo_btn.addEventListener('click', (e) =>{
	const snap= takeSnapShot() //call snapchot function
	document.getElementById("snap").style.display = "inline"; // place the snapshot beside the video
	const image_tag= document.getElementById('snap') // get image tag
	image_tag.setAttribute("src", snap) // set attribute src

	// To create a flash
	document.getElementById("flash").style.display = "inline";
	setTimeout(function () {
		document.getElementById("flash").style.display = "none";
	}, 200);

	// Save photo
	const save_tag= document.getElementById('save-photo')
	save_tag.setAttribute("href", snap) // set attribute href
	e.preventDefault(); 
})

// Eventlistener for delete button
delete_photo_btn.addEventListener('click', (e) =>{
	const image_tag2= document.getElementById('snap') // get image tag
	image_tag2.setAttribute("src",'') // set attribute src
	document.getElementById("snap").style.display = "none"; // set display to none

	// Delete saved photo
	const save_tag2= document.getElementById('save-photo')
	save_tag2.setAttribute("href", '') // set attribute href 
	e.preventDefault(); 
}) 




