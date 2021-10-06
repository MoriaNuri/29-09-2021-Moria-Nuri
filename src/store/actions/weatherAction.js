

import { weatherService } from '../../services/weather-service';
import { setToast } from './toastAction';



export function loadDefaultWeather(defultLocation) {
  return async dispatch => {
    try {
      const defaultLocation = await weatherService.getDefaultLocation(defultLocation);
      const currWeather = await weatherService.getCurrWeather(defaultLocation);
      const forecast = await weatherService.getForecast(defaultLocation);
      dispatch({ type: 'SET_CURR_WEATHER', currWeather });
      dispatch({ type: 'SET_CURR_FORECAST', forecast });
    } catch (err) {
      dispatch(setToast({ msg: `Can't load default location`, type: 'error' }));
    }
  };
}

export function loadAutoOptions(cityName) {
  if (cityName === '') return;
  return async dispatch => {
    try {
      const options = await weatherService.getCities(cityName);
      dispatch({ type: 'SET_AUTOCOMPLETE_OPTIONS', options });
    } catch (err) {
      dispatch({ type: 'SET_AUTOCOMPLETE_OPTIONS', options: [] });
      dispatch(setToast({ msg: `Can't get auto complete options`, type: 'error' }));
    }
  };
}
export function loadCurrWeather(currLocation) {
  return async dispatch => {
    try {
      const currWeather = await weatherService.getCurrWeather(currLocation);
      dispatch({ type: 'SET_CURR_WEATHER', currWeather });
    } catch (err) {
      dispatch(setToast({ msg: `Can't load current Location`, type: 'error' }));
    }
  };
}

export function loadCurrForecast(locationKey) {
  return async dispatch => {
    try {
      const forecast = await weatherService.getForecast(locationKey);
      console.log(forecast,'forecast');
      dispatch({ type: 'SET_CURR_FORECAST', forecast });
    } catch (err) {
      dispatch(setToast({ msg: `Can't load forecast`, type: 'error' }));
    }
  };
}


