import React from 'react';

const DisplayWeather = React.memo(({city, code, description, temp, minimumTemp, maximumTemp, error}) => {
    const valueTemperature = (value) => {
        return Math.round(value - 273);
    };

    return (
        <>
            { city && code ?
                <div>
                    <p>Погода в городе {city}, {code}: {description};</p>
                    <p>Текущая температура: {valueTemperature(temp)}°C;</p>
                    <p>Минимальная температура сегодня: {valueTemperature(minimumTemp)}°C;</p>
                    <p>Максимальная температура сегодня: {valueTemperature(maximumTemp)}°C.</p>
                </div>
                :
                <div>{error}</div>
            }
        </>
    )
});

export default DisplayWeather;