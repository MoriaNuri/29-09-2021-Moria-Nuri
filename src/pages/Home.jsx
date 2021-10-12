import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { loadDefaultWeather, loadCurrWeather, loadCurrForecast, } from '../store/actions/weatherAction.js';
import useGeoLocation from '../hooks/useGeoLocation.js';
import Search from '../cmps/Search'
import ForecastList from '../cmps/ForecastList'
import CurrentWeather from '../cmps/CurrentWeather'

function Home() {
  const dispatch = useDispatch();
  const { currWeather, forecast, loading } = useSelector(state => state.weatherModule)
  const { locationKey, locationName } = useParams();
  //  if user not accpet Location access-  load telaviv
  const { defultlocation, isLoading } = useGeoLocation();

  // location from Geolocation (not from params)
  useEffect(() => {
    if (defultlocation && !isLoading && !locationKey && !locationName) dispatch(loadDefaultWeather(defultlocation))
  }, [defultlocation, isLoading]);

  // location from params-When a user clicks on favorite location in favorite page
  useEffect(() => {
    const location = {
      Key: locationKey,
      LocalizedName: locationName,
    };
    if (!locationKey || !locationName) return;
    dispatch(loadCurrWeather(location));
    dispatch(loadCurrForecast(location));
  },
    [locationKey, locationName, loading]
  );

  return (
    <section className="home">
      <Search />
      {loading || isLoading ? <div className="loading">Loading...</div> : <CurrentWeather currWeather={currWeather} />}
      <ForecastList forecast={forecast} />
    </section >
  )
}
export default Home
