import React from 'react'
import ForecastPreview  from './ForecastPreview'

function ForecastList({forecast}) {
    return (
        <section className="forecast-list">
             {forecast && forecast.dailyForecasts.map((dailyForecast,idx) => <ForecastPreview key={idx} dailyForecast={dailyForecast} />)}
        </section>
    )
}

export default ForecastList
