import React, { Component } from 'react'

export default class WeatherDataComponent extends Component {
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.temp===this.props.city && nextProps.city===this.props.city){
            return false
        }
        return true

    }
    render() {
        console.log("render from weather component");
        return (
            <div>
                <p>Feels like {this.props.feelsLike}</p>
                <p>City : {this.props.city}</p>
                <img src={ `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`} alt=""/>
                <div>
                    <h1>Temperture:{this.props.temp}</h1>
                </div>
                <p>{this.props.humidity}</p>
                <p>{this.props.pressure}</p>
                <p>{this.props.maxTemp}</p>
                <p>{this.props.minTemp}</p>
                
            </div>
        )
    }
}

