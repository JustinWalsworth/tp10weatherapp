/* Javascript for TP10 */

// adds the code to wait for the DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // code to load the weather API
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'e80582e1b1msh638181148f6959bp16c794jsn3e27b66d8c2b',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
    };
    
    // fetches data for zipcode 99163 which is Pullman, WA
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99163', options)
        .then(response => response.json())
        .then(function(response){
            document.querySelector("#location span").innerHTML = response.location.name; // selects the location
            document.querySelector("#tempf span").innerHTML = response.current.temp_f; // selects the temerature in f
            document.querySelector("#winddir span").innerHTML = response.current.wind_dir; // selects the wind direction
            document.querySelector("#windspeed span").innerHTML = response.current.wind_mph; // selects the wind speed
            document.querySelector("#cloudcover span").innerHTML = response.current.vis_miles; // selects the cloud cover
            document.querySelector("#humidity span").innerHTML = response.current.humidity; // selects the humidity
            
            return response;
        })
        .catch(err => console.error(err));

});