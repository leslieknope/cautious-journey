var input = document.getElementById("query");

var button = document.getElementById("getdata");

var div = document.getElementById("results");



button.addEventListener("click", function() {

    

    var urlBase = "http://biketownpdx.socialbicycles.com/opendata/free_bike_status";

    var urlEnd = ".json";

    

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", callback);

    xhr.open("GET", urlBase + urlEnd);

    xhr.send();

    

    function callback() {

        var data = JSON.parse(xhr.responseText);

        var htmlString = "";

        
        

        htmlString += '<h3>Bikes available ' + data.data.bikes.length+ '</h3>'
        
   //I think this is broken because bikesList is a string and needs to be converted into an object
        for(item in data.data.bikes){
            htmlString += '<p>' + JSON.stringify(data.data.bikes[item]['bike_id']) + '</p>'
            htmlString += '<p>' + JSON.stringify(data.data.bikes[item]['name']) + '</p>'
        }
        

       // htmlString += '<p><img src="' + data.current_observation.icon_url.slice(5) + '"</img> ' + data.current_observation.weather + '</p>'

       // htmlString += '<p>Current Temperature: ' + data.current_observation.temperature_string + '</p>'

        

        div.innerHTML = htmlString;

    }

    

});