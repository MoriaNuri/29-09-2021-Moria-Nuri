import { useSelector } from 'react-redux';

export default function ForcastPreview({dailyForecast}) {
  const {isCelsius} = useSelector(state => state.preferenceModule,
    );
    const convertFarhernheitToCelcius = (minTemp,maxTemp) => {
        const cMinTemp =  Math.round(((minTemp - 32 ) * (5 / 9)).toFixed(0));
        const cMaxTemp = Math.round(((maxTemp - 32 ) * (5 / 9)).toFixed(0));
        return {
          cMinTemp,
          cMaxTemp
        }
        
    }

  const {Icon : icon,IconPhrase: iconPhrase} = dailyForecast.Day
  const locationIcon = icon < 10 ? `0${icon}` : icon
  // const date = dailyForecast.Date.substring (0, 10);
  const date = new Date(  dailyForecast.Date );
  const day = date.toString().split( ' ' )[0];
  const {Value : cMinTemp} = dailyForecast.Temperature.Minimum
  const {Value : cMaxTemp} = dailyForecast.Temperature.Maximum
  const celiusTemps = isCelsius ? convertFarhernheitToCelcius(cMinTemp,cMaxTemp) : {cMinTemp,cMaxTemp};
  const tempUnit = isCelsius ? <>&#8451;</> : <>&#8457;</>

  return (
    <section className="forecast-preview">
        <span className="day">{ day }</span>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${locationIcon}-s.png`}
        alt={iconPhrase}
      />
      <span className="temperatures">
        {celiusTemps.cMinTemp}{tempUnit}/{celiusTemps.cMaxTemp}{tempUnit}</span>
      {/* <div className="img"> */}
      {/* </div> */}
      {/* <div className="forecast-info "> */}
      {/* <span>{date}</span> */}
      {/* <span>{iconPhrase}</span> */}
      {/* </div> */}
    </section>
  );
}