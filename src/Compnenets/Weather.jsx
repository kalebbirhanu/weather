import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const[city, setCity] = useState('');
  const[Weather, setWeather] = useState(null);
  const[error, setError] = useState(null);
 const getWeather = async() => {
  try{

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c273cc0d2a7d808066ba84ba98c0bb1`);
    setWeather(response.data);
  } catch (error) {
   setError('cannot fetch the data', error)

  }
 }
  return (
    <div className="container mx-auto px-4 text-center bg-yellow-200">
    <h1 className='text-3xl font-serif m-8 content-center '> Weather</h1>
    <div className='space-x-4'>
      <input className='border-4 border-slate-300 hover:border-green-500/50 ' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='enter the city' />
      <button onClick={getWeather} className='bg-indigo-500/50 rounded md:rounded-lg border-solid '>get weather</button>
    </div>
    <div>
      {error && <p>something goes wrong </p> }
     {Weather && (<div>
      <h3>{Weather.name}, {Weather.sys.country}</h3>
        <p className='capitialize hover:uppercase'>temprature: {Weather.main.temp}  degree celisus</p>
        <p className='capitalize hover:uppercase'>weather: {Weather.weather[0].description}</p>
     </div>)}
    </div>
    </div>
  )
}

export default Weather;