import axios from "axios";
const API_KEY = 'jNdyMLl1Ofost8P6PkJIbRgFp8kaNY35'
// const API_KEY = '	8Ny0XNJOvOJIxHC0GumQ7XWKCr0UQEy0'
// const API_KEY = '3TfLflH6A25XDEguQ8fv2GAqwWGlanP8'
const BASE_URL = `https://dataservice.accuweather.com/`



export const weatherService = {
  getDefaultLocation,
  getCities,
  getCurrWeather,
  getForecast,
 
}

async function getDefaultLocation(location) {
  const { latitude, longitude } = location;
  try {
    const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`);
    return res.data
  } catch (err) {
    throw err
  }
}


async function getCities(cityName) {
  try {
    const res = await axios.get(
      `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}&language=en-us`
    );
    const options = res.data;
    if (options.length === 0) {
      console.log('no options');
      throw Error(`No options Available for ${cityName}`);
    }
    return options;
  } catch (err) {
    console.log(err);
    throw err
  }
}
async function getCurrWeather(location) {
  console.log(location);
  let locationName=location.AdministrativeArea.LocalizedName
  let locationKey= location.Key
  try {
    const res = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`
    );
    console.log(res);
    const {
      IsDayTime: isDayTime,
      WeatherIcon: weatherIcon,
      WeatherText: weatherText,
      Temperature: temperature,
    } = res.data[0];
    const location = {
      isDayTime,
      weatherText,
      weatherIcon,
      temperature,
      locationKey,
      locationName
    };
    return location;
  } catch (err) {
    throw err
  }
}

// Forecast for 5 day
async function getForecast(location) {
  const { Key } = location;
  try {
    const res = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${API_KEY}`
    );
    const { Headline, DailyForecasts: dailyForecasts } = res.data;
    const { Text: text, Severity: sevirity, EffectiveDate: effectiveDate } = Headline;
    return {
      text,
      sevirity,
      effectiveDate,
      dailyForecasts
    }
  } catch (err) {
    throw err;
  }
}



