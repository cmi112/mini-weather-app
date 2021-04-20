import React,{Component} from 'react'
import WeatherDataComponent from './WeatherDataComponent'


export default class App extends Component {
  state={
    cityName:"",
    weatherData:null
  }
  getUserCity=(e)=>{
    this.setState({
     cityName: e.target.value
    })
    
  }

  formSubmission=(e)=>{
    // it prevent that the form is not refreshes
    e.preventDefault()
    console.log("form submitted");
    console.log(this.state.cityName);
    if(this.state.cityName.trim()!== ""){
      this.fetchWeatherData(this.state.cityName)
    }


  }
  fetchWeatherData=(city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then(response=>response.json()).then(data=>this.setState({weatherData:data})).catch(err=>console.log(err))
  }
  componentDidMount(){
    // onload
    this.fetchWeatherData("Wetzlar")
  
    
  }
  render(){
    // API HIDEN
    // console.log(process.env.REACT_APP_API_KEY);
 let data=this.state.weatherData
console.log(this.state.weatherData);
    return(
      <div className="card">
      <h1>Weather App</h1>
      <form onSubmit={this.formSubmission}>
        <input type="text" placeholder="Enter Your City Name" onChange={this.getUserCity}/>
        <button>Get Weather Data</button>
      </form>
      {data && 
      <WeatherDataComponent 
      city={this.state.cityName}
       temp={data.main.temp}
       maxTemp={data.main.maxTemp_max}
       minTemp={data.main.temp_min}
       humidity={data.main.humidity}
       feelsLike={data.main.feels_like}
       icon={data.weather[0].icon}
      />}
    </div>
    );
   
  }}
  
 