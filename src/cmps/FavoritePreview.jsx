import { useSelector } from 'react-redux';
import Loading from './Loading';


function FavoritePreview({ location, visitLocation }) {
  const { isCelsius } = useSelector(state => state.preferenceModule)
  const tempUnit = isCelsius ? <>&#8451;</> : <>&#8457;</>
  const temperature = isCelsius ? location.cTemp : location.fTemp
  const locationIcon = location.icon < 10 ? `0${location.icon}` : location.icon;

  return (
    <section className="favorite-preview" onClick={() => visitLocation(location)}>
      {!location && <Loading />}
      <h2>{location.locationName}</h2>
      <div className="location-img">
        <img
          src={`https://developer.accuweather.com/sites/default/files/${locationIcon}-s.png`}
          alt={`${location.icon}-icon`}
        />
      </div>
      <h3>{temperature}{tempUnit}</h3>
    </section>
  )
}
export default FavoritePreview
