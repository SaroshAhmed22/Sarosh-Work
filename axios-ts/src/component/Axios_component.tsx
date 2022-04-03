import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Axios_component = () => {

    const [latitude, setlatitude] = useState<string>('20.593684')
    const [longitude, setlongitude] = useState<string>("78.96288")
    const [cloud, setcloud] = useState()
    const [weather, setweather] = useState()
    const [windspeed, setwindspeed] = useState()
    const [windgust, setwindgust] = useState()
    const [country, setcountry] = useState()
    const [temp, settemp] = useState()
    const [humidity, sethumidity] = useState()
    const [pressure, setpressure] = useState()
    const [sea_level, setsea_level] = useState()
    const [timezone, settimezone] = useState()
    const [sunrise, setsunrise] = useState()
    const [sunset, setsunset] = useState()

    let apiKey = 'b6a2736a6a4590424bbce6114483f7a6';


    const selectLatitide = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const newValue = (<HTMLInputElement>e.target).value
        setlatitude(e.target.value)

    }


    // const selectLatitide = (
    //     e: React.ChangeEvent<HTMLInputElement>
    //   ) => {
    //     setlatitude(e.currentTarget.value);
    //   };


    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            //    const newResponse= await response.json();
            //    console.log(newResponse); 
            console.log(response.data.sys.sunrise)
            // console.log(response.data.timezone)
            // console.log(response.data.main.temp)
            // console.log(response.data.clouds.all);
            // console.log(response.data.wind.speed);
            // console.log(response.data.weather[0].description);
            // console.log(response.data.sys.country);
            setcloud(response.data.clouds.all)
            setweather(response.data.weather[0].description)
            setwindspeed(response.data.wind.speed)
            setwindgust(response.data.wind.gust)
            setcountry(response.data.sys.country)
            settemp(response.data.main.temp)
            sethumidity(response.data.main.humidity)
            setpressure(response.data.main.pressure)
            setsea_level(response.data.main.sea_level);
            settimezone(response.data.timezone);
            setsunrise(response.data.sys.sunrise)
            setsunset(response.data.sys.sunset)
        }
        getData();
    })
    return (

        <div className='container'>
            <h2>Select Latituide</h2>
            <select name="" id="" value={latitude} aria-label="State"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => selectLatitide} >
                <option value="20.593684">20.593684</option>
                <option value="42.546245">42.546245</option>
                <option value="23.424076">23.424076</option>
                <option value="	33.93911">33.93911</option>
                <option value="	33.89918276">33.89918276</option>
                <option value="	41.153332">	41.153332</option>
            </select>

            <h2>Select Longitude</h2>
            <select name="" aria-label="State" id="" value={longitude} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setlongitude(e.target.value) }} >
                <option value="78.96288">78.96288</option>
                <option value="-77.0364">	1.601554</option>
                <option value="	53.847818">	53.847818</option>
                <option value="	67.709953">	67.709953</option>
                <option value="70.10082678">70.10082678</option>
                <option value="20.168331">20.168331	</option>
                <option value="70.10082678">70.10082678</option>


            </select>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 ml-3">
                        <div className="card" style={{}}>
                            <div className="card-body">
                                <img src="https://imgs.search.brave.com/WnemcvzWekISE_OILrpiuxYVyhtWsq6jAurmWK5ZhK8/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/dmUxa2h6MWVtcG0w/bFhQcVh3aHJ3SGFF/NyZwaWQ9QXBp" alt="" />
                                <br /><br />

                                <h5>Latitude : <span style={{ color: 'red' }}>{latitude}</span></h5>
                                <h5>Longitude : <span style={{ color: 'red' }}>{longitude}</span></h5>
                                <h5 className="card-title">Clouds :  <span style={{ color: 'red' }}>{cloud}</span></h5>
                                <h5>Weather :  <span style={{ color: 'red' }}>{weather}</span></h5>
                                <h5>Wind Speed :  <span style={{ color: 'red' }}>{windspeed}</span></h5>
                                <h5>Wind Gust :  <span style={{ color: 'red' }}>{windgust}</span></h5>
                                <h5>Name :  <span style={{ color: 'red' }}>{country}</span></h5>


                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 col-12">
                        <div className="card">
                            <h5>Temperature :  <span style={{ color: 'red' }}>{temp}</span></h5>

                            <h5>Humidity :  <span style={{ color: 'red' }}>{humidity}</span></h5>
                            <h5>Pressure :  <span style={{ color: 'red' }}>{pressure}</span></h5>

                            <h5>Sea level :  <span style={{ color: 'red' }}>{sea_level}</span></h5>

                        </div>

                    </div>

                    <div className="col-md-4 col-12">
                        <div className="card">
                            <h5>Time Zone :  <span style={{ color: 'red' }}>{timezone}</span></h5>
                            <h5>Sunrise :  <span style={{ color: 'red' }}>{sunrise}</span></h5>
                            <h5>Sunset :  <span style={{ color: 'red' }}>{sunset}</span></h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Axios_component