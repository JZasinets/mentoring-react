import React from 'react';

const Form = React.memo(({ getWeather }) => {
    return (
        <>
            <div className='weather-text'>Введите название города и код страны на английском:</div>
            <form className='weather-form' onSubmit={getWeather}>
                <input type='text' placeholder='City name' name='cityName'/>
                <input type='text' placeholder='Country code' name='countryCode'/>
                <button className='submitButton'>Поиск</button>
            </form>
        </>
    )
})

export default Form;
