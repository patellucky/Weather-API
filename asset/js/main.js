function done() {
    var lan;
    var long;
    var name = document.getElementById('cityinput');
    name = name.value
    console.log(name);


    if (name === '') {
        name = 'surat'
    }

    var cityName = document.getElementById('city');
    cityName.innerHTML = name

    $.ajax({
        url: 'https://api.api-ninjas.com/v1/city?name=' + name,
        method: 'GET',
        headers: { 'X-Api-Key': 'LX0xMx34lmKrvCRxCWy5EQ==WIwckvbOkBX8wr68' },
        contentType: 'application/json',
        success: function (result) {
            lan = result[0].longitude
            long = result[0].latitude

            weather(lan, long)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

}

function weather(lat, lon) {
    var API = '21eda837effb6d857ffacaf17fd65a8c'

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`,
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            var data = result
            console.log(data);
            document.getElementById('dis_hum').innerHTML = data.main.humidity
            document.getElementById('dis_pre').innerHTML = data.main.pressure
            document.getElementById('dis_temper').innerHTML = data.main.temp
            document.getElementById('dis_visib').innerHTML = data.visibility
            document.getElementById('dis_wind').innerHTML = data.wind.speed
            document.getElementById('dis_sea_level').innerHTML = data.main.sea_level
        }
    });
}
