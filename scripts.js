/* Javascript for TP10 */

// adds the code to wait for the DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // code to load API
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'e80582e1b1msh638181148f6959bp16c794jsn3e27b66d8c2b',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
    };
    
    // fetches data for zipcode 99163
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99163', options)
        .then(response => response.json())
        .then(function(response){
            document.querySelector("#location span").innerHTML = response.location.name;
            
            return response;
        })
        .catch(err => console.error(err));

});