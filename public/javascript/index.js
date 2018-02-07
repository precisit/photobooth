
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
//const save_photo_btn=document.getElementById('save-photo')

// Eventlistener for take photo button
take_photo_btn.addEventListener('click', (e) =>{
	console.log("Clicked on take-photo")
	const snap= takeSnapShot() //anropa snapchot funktionen, den returnerar en bild
	document.getElementById("snap").style.display = "inline";
	const image_tag= document.getElementById('snap') // get image tag
	image_tag.setAttribute("src", snap) // set attribute src

	// Save photo
	/*const save_tag= document.getElementById('save-photo')
	console.log('Get save button: '+save_tag)
	save_tag.setAttribute("href", snap) // set attribute href
	console.log('Set attribute href for save photo: ' +save_tag.setAttribute("href", snap) )
	e.preventDefault(); */
})

// Eventlistener for save button
/*save_photo_btn.addEventListener('click', (e) =>{
	console.log("save photo")
 }) */

// Eventlistener for delete button
delete_photo_btn.addEventListener('click', (e) =>{
	const image_tag2= document.getElementById('snap') // get image tag
	image_tag2.setAttribute("src",'') // set attribute src
	document.getElementById("snap").style.display = "none";

	// Save photo
	/*const save_tag2= document.getElementById('save-photo')
	save_tag2.setAttribute("href", '') // set attribute href
	console.log("Delete photo")
	e.preventDefault(); */
}) 


//Function
const takeSnapShot = () => {
	const width= document.getElementById('camera-stream').width; // get width of videostream
	const height= document.getElementById('camera-stream').height;
	console.log("Width: " + width)
	console.log("Height: " + height)

	 // Grab elements, create settings, etc.
    const context = hidden_canvas.getContext("2d")
    context.drawImage(video,0,0,width,height)
    return hidden_canvas.toDataURL("image/png") // returnerar en bild

}



