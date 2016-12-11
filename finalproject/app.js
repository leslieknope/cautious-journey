var selection = document.getElementById("select");

var dataButton = document.getElementById("getdata");
var mapButton = document.getElementById("getmap");
var div = document.getElementById("results");
var mapArea = document.getElementById("map")

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

        if(selection.value === "Any"){
            htmlString += '<h3>Total Free Bikes available ' + data.data.bikes.length+ '</h3>'
            for(var i=0; i< data.data.bikes.length; i++){
                htmlString += '<p>' + JSON.stringify(data.data.bikes[i]['bike_id']) + '</p>'
                htmlString += '<p>' + JSON.stringify(data.data.bikes[i]['name']) + '</p>'
            
            }
            div.innerHTML = htmlString + '<div><button id="getMap">Map It?</button></div>';
            mapButton.hidden = "false"
        };
        
        if(selection.value === "Sneaker"){
            htmlString += '<h3>Total Free Bikes available ' + data.data.bikes.length+ '</h3>'
            for(var i=0; i< data.data.bikes.length; i++){
                if(data.data.bikes[i]['name'].search("BIKETOWN") === -1){
                htmlString += '<p>' + data.data.bikes[i]['bike_id'] + '</p>'
                htmlString += '<p>' + data.data.bikes[i]['name'] + '</p>'
                }  
            
            }
            div.innerHTML = htmlString + '<div><button id="getMap">Map It?</button></div>';
            mapButton.hidden = "false"
        };
      
    }



});

// mapButton.addEventListener("click", function() {
//     var url = "http://api.openstreetmap.org/api/0.6/map?bbox=-122.7417,45.4876,-122.5381,45.5722"
//     var xhr = new XMLHttpRequest();

//     xhr.addEventListener("load", callback);
//     xhr.open("GET", url);
//     xhr.send();

//     function callback(){
//         var map = XML
//     }
// });