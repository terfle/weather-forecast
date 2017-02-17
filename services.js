weatherApp.service('cityService', function() {
    this.city = "Bellingham, WA";
});

weatherApp.service('weatherService',['$resource', function($resource) {
    
    this.GetWeather = function(city,days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherAPI.get({ q: city, cnt: days, appid: '0f9edb7173497a7b32f0689db5618249' });
    }
}]);