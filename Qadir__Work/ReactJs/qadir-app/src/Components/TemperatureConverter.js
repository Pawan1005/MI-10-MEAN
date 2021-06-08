import React, { Component } from 'react';

class TemperatureConverter extends Component {

    constructor(){
        super();
        this.state = {
            actualTemperature: 0,
            temperatureLabel: 'Select Temperature',
            convertTemperatures: 0,
            temperatureUnit: ''
        }
        this.convertTemperature = this.convertTemperature.bind(this);
    }

    convertTemperature(event) {
        event.preventDefault();

        let temperature = 0;
        if (this.state.temperatureLabel === 'Celcius') {

            temperature =  ((this.state.actualTemperature) * 9 / 5) + 32;
            this.setState({
                convertTemperatures: temperature,
                temperatureUnit: 'Fahrenheit'
            });
        }

        else {
            temperature =  (this.state.actualTemperature - 32) * 5 / 9;
            this.setState({
                convertTemperatures: temperature,
                temperatureUnit: 'Celcius'
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Temperature Converter</h1>
                <form>
                    <input type="text" onChange={(event) => this.setState({...this.state, actualTemperature: parseInt(event.target.value)})} value={this.state.actualTemperature} />
                    <select onChange={(event) => this.setState({...this.state, temperatureLabel: event.target.value})}>
                        <option defaultValue="Select Temperature">Select Temperature</option>
                        <option value="Celcius">Celcius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                    </select>
                    <button disabled={this.state.temperatureLabel === 'Select Temperature'} onClick={this.convertTemperature}>Convert</button>
                    <input value={`${this.state.convertTemperatures.toFixed(2)} ${this.state.temperatureUnit}`} />
                </form>
            </div>
        )
    }
}
export default TemperatureConverter;
