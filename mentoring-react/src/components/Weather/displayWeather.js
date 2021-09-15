import React from 'react';
import { useCallback } from 'react';

const DisplayWeather = React.memo(({city, code, description, temp, minimumTemp, maximumTemp, error}) => {
    const valueTemperature = useCallback((value) => {
        return Math.round(value - 273);
    }, []);

    return (
        <>
            { Boolean(city && code) ?
                <div className="weather-display">
                    <p>Погода в городе <span>{city}</span>, <span>{code}</span>: <span>{description}</span>;</p>
                    <p>Текущая температура: <span>{valueTemperature(temp)}°C</span>;</p>
                    <p>Минимальная температура сегодня: <span>{valueTemperature(minimumTemp)}°C</span>;</p>
                    <p>Максимальная температура сегодня: <span>{valueTemperature(maximumTemp)}°C</span>.</p>
                </div>
                :
                <div>{error}</div>
            }
        </>
    )
});

export default DisplayWeather;
