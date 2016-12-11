var selection = document.getElementById("select");
var dataButton = document.getElementById("getdata");
var mapButton = document.getElementById("getmap");
var results = document.getElementById("results");
var mapArea = document.getElementById("map")

var areaMap = L.map('map').fitBounds([
    [45.6077682, -122.9945375],
    [45.4289472, -122.4139835]
]);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(areaMap);

dataButton.addEventListener("click", function() {


    var urlBase = "http://biketownpdx.socialbicycles.com/opendata/free_bike_status";
    var urlEnd = ".json";
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", callback);
    xhr.open("GET", urlBase + urlEnd);
    xhr.send();

    function callback() {

        var data = JSON.parse(xhr.responseText);
        var htmlString = "";
        console.log(selection);
        htmlString += '<h3>Total Free Bikes available ' + data.data.bikes.length+ '</h3>'

        if(selection.value === "Any"){
            
            for(var i=0; i< data.data.bikes.length; i++){
                htmlString += '<p>' + JSON.stringify(data.data.bikes[i]['bike_id']) + '</p>'
                htmlString += '<p>' + JSON.stringify(data.data.bikes[i]['name']) + '</p>'
            
            }
            results.innerHTML = htmlString + '<div><button id="getMap">Map It?</button></div>';
            mapButton.hidden = "false"
        };
        
        if(selection.value === "Sneaker"){
            for(var i=0; i< data.data.bikes.length; i++){
                if(data.data.bikes[i]['name'].search("BIKETOWN") === -1){
                htmlString += '<p>' + data.data.bikes[i]['bike_id'] + '</p>'
                htmlString += '<p>' + data.data.bikes[i]['name'] + '</p>'
                var marker = L.marker([data.data.bikes[i]['lat'], data.data.bikes[i]['lon']]).bindPopup(data.data.bikes[i]['name']).addTo(areaMap);
                }  
            
            }
            results.innerHTML = htmlString + '<div><button id="getMap">Map It?</button></div>';
            mapButton.hidden = "false"
        };
      
    }



});