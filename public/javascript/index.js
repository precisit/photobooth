
const video= document.getElementById('video')// Get video stream
const canvas = document.getElementById('canvas'); // Get canvas

// Fetch video stream
navigator.mediaDevices.getUserMedia({ video: true })
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
	const width= video.width; // get width of videostream
	const height= video.height;
    const context = canvas.getContext("2d") // set context
    context.drawImage(video,0,0,width,height) // draw image
    return canvas.toDataURL("image/png") // return image
}

// Eventlistener for take photo button
take_photo_btn.addEventListener('click', (e) =>{
	const image= takeSnapShot() //call snapchot function
	const image_element=document.getElementById("image");
	image_element.style.display = "inline"; // place the snapshot beside the video
	image_element.setAttribute("src", image) // set attribute src

	// To create a flash
	document.getElementById("flash").style.display = "inline";
	setTimeout(function () {
		document.getElementById("flash").style.display = "none";
	}, 200);

	// Save photo
	save_photo_btn.setAttribute("href", image) // set attribute href
	e.preventDefault(); 
})

// Eventlistener for delete button
delete_photo_btn.addEventListener('click', (e) =>{
	const image_element=document.getElementById("image");
	image_element.setAttribute("src",'') // set attribute src
	image_element.style.display = "none"; // set display to none

	// Delete saved photo
	save_photo_btn.setAttribute("href", '') // set attribute href 
	e.preventDefault(); 
}) 




