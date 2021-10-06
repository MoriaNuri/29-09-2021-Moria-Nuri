import { useSelector } from 'react-redux'
import { useFavorite } from '../hooks/useFavorites';

function CurrentWeather({ currWeather}) {
    const { isCelsius } = useSelector(state => state.preferenceModule)
    const locationIcon = currWeather.weatherIcon < 10 ? `0${currWeather.weatherIcon}` : currWeather.weatherIcon;
    const convertFarhernheitToCelcius = temp => {
        return Math.round(((temp - 32) * (5 / 9)).toFixed(0));
    }
    const cTemp = isCelsius ? convertFarhernheitToCelcius(currWeather.temperature.Imperial.Value) : currWeather.temperature.Imperial.Value;
    const tempUnit = isCelsius ? <>&#8451;</> : <>&#8457;</>;
    const [ isFavorite, toggleFavorite ] = useFavorite( currWeather );

   
    return (
        <section className="current-weather">
            <div className="title">
                <button onClick={ toggleFavorite } className={`btn-favorite ${isFavorite ? 'isFavorite' : ''}`} ><i class="fas fa-heart"></i></button>
                <h1 className="location-title">
                    {currWeather.locationName}
                </h1>
            </div>
            <div className="location-weather">
                <img
                    className="location-img"
                    src={`https://developer.accuweather.com/sites/default/files/${locationIcon}-s.png`}
                    alt={`${currWeather.weatherIcon}-icon`}
                />
                <h2 className="temperature">{cTemp}{tempUnit} </h2>
            </div>
            <h3> {currWeather.weatherText}</h3>
        </section >
    )
}

export default CurrentWeather
