const request = require('request');

function KelvinToFahrenheit(kelvin_temp){
    return(kelvin_temp*9/5 - 459.67);
}

function getWeather(city, callback){
    //console.log("getWeather() called");
    let api_key = "aed2b09e4de4ca581fb91bf745bb264e";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    console.log(url);

    request(url,function(err, response, body){
        if(err){
            console.log('error: ',err);
            callback(null);
        } else {
            //console.log('body: ',body);
            body = JSON.parse(body);
            var output = {};
            output.city = city;
            if(body.name === "Waco"){
                output.city_name = "College Station";
            } else {
                output.city_name = body.name;
            }
            
            output.temp = KelvinToFahrenheit(body.main.temp).toFixed(0);//toFixed() rounds the numbers to 0 decimen points
            output.temp_min = KelvinToFahrenheit(body.main.temp_min).toFixed(0);
            output.temp_max = KelvinToFahrenheit(body.main.temp_max).toFixed(0);
            output.description = body.weather[0].description;
            callback(output);
        }
    })
}

export default getWeather;


