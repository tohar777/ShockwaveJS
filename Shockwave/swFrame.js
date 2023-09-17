function getFrame(getFramename){
	var frame = document.getElementById(getFramename);
	frame.style = "border: 3px solid black";
	        // Define the URL of the JSON file
	const jsonFileURL = 'Shockwave/Shockwave.json';
	fetch(jsonFileURL)
	.then(response => {
		if (!response.ok) {
		   throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		// Process the JSON data here
		console.log('File contents:', data);
	})
	.catch(error => {
		// Handle any errors that occurred during the fetch
		console.error('Error:', error);
		// You may want to update the iframe source or display an error message here
		 document.getElementById('ShockwaveFrame').src = "Shockwave/err/index.html";
});
}
