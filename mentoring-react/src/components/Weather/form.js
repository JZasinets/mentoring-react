import React from 'react';
import { useCallback } from 'react';

const Form = React.memo(({ getWeather }) => {
    const refreshResults = useCallback(() => {
        return getWeather;
    }, [])

    return (
        <>
            <div className='weather-text'>Введите название города и код страны на английском:</div>
            <form className='weather-form' onSubmit={refreshResults()}>
                <input type='text' placeholder='City name' name='cityName'/>
                <input type='text' placeholder='Country code' name='countryCode'/>
                <button className='submitButton'>Поиск</button>
                <button className='submitButton' onClick={refreshResults}>Обновить данные</button>
            </form>
        </>
    )
})

export default Form;
