import React from 'react';
import DisplayWeather from './displayWeather';
import Form from './form';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            code: undefined,
            description: undefined,
            temp: undefined,
            minimumTemp: undefined,
            maximumTemp: undefined,
            error: undefined,
        }
    }

    getWeather = async (event) => {
        event.preventDefault();
        let cityName = event.target.cityName.value;
        let countryCode = event.target.countryCode.value;
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&lang=ru&appid=136a1286295ce51ceabf7e5462f4a04a`);
        const data = await response.json();

        if (cityName && countryCode) {
           try {
               this.setState({
                   city: data.name,
                   code: data.sys.country,
                   description: data.weather[0]['description'],
                   temp: data.main.temp,
                   minimumTemp: data.main.temp_min,
                   maximumTemp: data.main.temp_max,
                   error: undefined,
               })
            } catch (error) {
               this.setState({
                   error: 'Убедитесь в правильности данных',
               })
            }
        } else {
            this.setState({
                city: undefined,
                code: undefined,
                error: 'Вы не ввели название города и код страны',
            })
        }
    }

    render () {
        return (
            <div className='weather'>
                <div className='header'>Прогноз погоды</div>
                <Form getWeather={this.getWeather}/>
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
