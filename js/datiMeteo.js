aggiornaDatiMeteo();
setInterval(aggiornaDatiMeteo, 360000);

function aggiornaDatiMeteo() {

    const REQUEST_URL = "data/datiMeteo.json";

    fetch(REQUEST_URL, {  
        headers: {
            'Accept': 'application/json'  // n.b. di default il metodo HTTP è GET
        }
    })
        .then(datiMeteoReadableStream => datiMeteoReadableStream.json()) 
        .then(datiMeteoJsonObject => elabora(datiMeteoJsonObject))
}

function elabora(datiMeteo) {

    const TEMPERATURA = document.getElementById("TEMPERATURA");
    TEMPERATURA.innerHTML = datiMeteo.current.temperature_2m +
        datiMeteo.current_units.temperature_2m;
    const WEATHER = document.getElementById("WEATHER");
    WEATHER.innerHTML = testoMeteo(datiMeteo.current.weather_code);
    const SUNRISE = document.getElementById("SUNRISE");
    SUNRISE.innerHTML = datiMeteo.daily.sunrise[0].substring(11, 16);
    const SUNSET = document.getElementById("SUNSET");
    SUNSET.innerHTML = datiMeteo.daily.sunset[0].substring(11, 16);
    const WIND_SPEED = document.getElementById("WIND_SPEED");
    WIND_SPEED.innerHTML = datiMeteo.current.wind_speed_10m +
        datiMeteo.current_units.wind_speed_10m;
}

function testoMeteo(weatherCode) {
    let testo = "";
    switch (weatherCode) {
        case 0: testo = "sereno";
            break;
        case 1:
        case 2: testo = "parz.coperto";
            break;
        case 3: testo = "coperto";
            break;
        case 45:
        case 48: testo = "nebbia";
            break;
        case 51:
        case 53:
        case 55: testo = "pioviggina";
            break;
        case 56:
        case 57: testo = "pioviggina gelata";
            break;
        case 61:
        case 63:
        case 65: testo = "pioggia";
            break;
        case 66:
        case 67: testo = "pioggia gelata";
            break;
        case 71:
        case 73:
        case 75: testo = "neve";
            break;
        case 77: testo = "granelli neve";
            break;
        case 80:
        case 81:
        case 82: testo = "rovesci pioggia";
            break;
        case 85:
        case 86: testo = "rovesci neve";
            break;
        case 95: testo = "temporali";
            break;
        case 96:
        case 99: testo = "grandine";
            break;
        default: testo = "n.p.";
    }
    return testo;
}