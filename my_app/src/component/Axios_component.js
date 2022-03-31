import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Axios_component = () => {

    const [latitude, setlatitude] = useState(42.546245)
    const [longitude, setlongitude] = useState(1.601554)
    const [cloud, setcloud] = useState()
    const [weather, setweather] = useState()
    let apiKey = 'b6a2736a6a4590424bbce6114483f7a6';


    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            console.log(response.data)
            console.log(response.data.clouds.all);
            console.log(response.data.weather[0].description);
            setcloud(response.data.clouds.all)
            setweather(response.data.weather[0].description)
        }
        getData();
    })
    return (
        <div>

            <h2>Select Latituide</h2>
            <select name="" id="" value={latitude} onChange={(e) => { setlatitude(e.target.value) }} >
                <option value="42.546245">	42.546245</option>
                <option value="23.424076">	23.424076</option>
                <option value="	33.93911">	33.93911</option>
                <option value="	41.153332">	41.153332</option>
            </select>

            <h2>Select Longitude</h2>


            <select name="" id="" value={longitude} onChange={(e) => { setlongitude(e.target.value) }} >
                <option value="-77.0364">	1.601554</option>
                <option value="	53.847818">	53.847818</option>
                <option value="	67.709953">	67.709953</option>
                <option value="20.168331	">20.168331	</option>

            </select>

            <div className="card" >
                <div className="card-body">
                    <h2 className="card-title">Clouds</h2>
                    <p className="card-text">{cloud}</p>

                    <h2>Weather</h2>
                    <p>{weather}</p>
                    
                </div>
            </div>


        </div>


    )
}

export default Axios_component