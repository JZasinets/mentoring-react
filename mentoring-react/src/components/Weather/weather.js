import React from 'react';
import DisplayWeather from './displayWeather';
import Form from './form';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            code: null,
            description: null,
            temp: null,
            minimumTemp: null,
            maximumTemp: null,
            error: null,
        }
    }

    getWeather = async (event) => {
        event.preventDefault();
        const cityName = event.target.cityName.value;
        const countryCode = event.target.countryCode.value;
        const cityInfo = cityName + ' ' + countryCode;
        const isContainsSymbols = /[~`!#$%^&*+=[\]\\';/{}|":<>?]/g.test(cityInfo);
        const isContainsNumbers = /\d/.test(cityInfo);

        const checkError = (errorContent) => {
            this.setState({
                    city: null,
                    code: null,
                    error: errorContent,
                })
        }

        if (!cityName || !countryCode) return checkError('Вы не ввели название города и/или код страны');
        if (isContainsNumbers || isContainsSymbols) return checkError('Проверьте корректность введённых данных данных');
        if (countryCode.length > 2 ) return checkError('Код страны не может содержать больше 2-х букв');
        if (countryCode !== countryCode.toUpperCase()) return checkError('Код страны введён не прописными буквами');

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&lang=ru&appid=136a1286295ce51ceabf7e5462f4a04a`);;
        const data = await response.json()
        try {
            this.setState({
                city: data.name,
                code: data.sys.country,
                description: data.weather[0]['description'],
                temp: data.main.temp,
                minimumTemp: data.main.temp_min,
                maximumTemp: data.main.temp_max,
            })
        } catch (error) {
            checkError('Убедитесь в правильности введённых данных');
        }
    }

    render () {
        return (
            <div className='weather'>
                <div className='header'>Прогноз погоды</div>
                <Form
                    getWeather={this.getWeather}
                    city={this.state.city}
                    code={this.state.code}
                />
                <DisplayWeather
                    city={this.state.city}
                    code={this.state.code}
                    description={this.state.description}
                    temp={this.state.temp}
                    minimumTemp={this.state.minimumTemp}
                    maximumTemp={this.state.maximumTemp}
                    error={this.state.error}
                />
            </div>
        )
    }
}

export default Weather;
