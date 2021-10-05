import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { setToast } from './../store/actions/toastAction';
import { loadDefaultWeather, loadCurrWeather, loadCurrForecast, } from '../store/actions/weatherAction.js';
import { addLocationToFavorites, deleteLocationFromFavorites, } from '../store/actions/favoriteAction';

import useGeoLocation from '../hooks/useGeoLocation.js';
import Search from '../cmps/Search'
import ForecastList from '../cmps/ForecastList'
import CurrentWeather from '../cmps/CurrentWeather'

function Home() {
  const dispatch = useDispatch();
  const { currWeather, forecast, loading } = useSelector(state => state.weatherModule)
  const { favorites } = useSelector(state => state.favoriteModule)
  const { locationKey, locationName } = useParams();
  //  if user not accpet Location access-  load telaviv
  const { defultlocation, isLoading } = useGeoLocation();
  const [isFavorite, setFavorite] = useState(false);

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
    dispatch(loadCurrForecast(locationKey));
  },
    [locationKey, locationName, loading]
  );



  const CheckIfInFavorites = location => {
    return favorites.find(loc => loc.id === location.locationKey)
  }

  const toggleFavorites = location => {
    console.log(location);
    const { locationName } = location
    const isLocationInDB = CheckIfInFavorites(location);
    if (isLocationInDB) {
      console.log(location);
      dispatch(deleteLocationFromFavorites(location.locationKey));
      setFavorite(false)
      dispatch(setToast({ msg: `${locationName} deleted from favorites`, type: 'error' }))
      return;
    }
    setFavorite(true)
    dispatch(addLocationToFavorites(location))
    dispatch(setToast({ msg: `${locationName} has been added to favorites`, type: 'success' }))
  }


  return (
    <section className="home">
      <Search />
      {loading || isLoading ? <div className="loading">Loading...</div> : <CurrentWeather currWeather={currWeather} toggleFavorites={toggleFavorites} isFavorite={isFavorite} />}
      <ForecastList forecast={forecast} />
    </section >
  )
}
export default Home
