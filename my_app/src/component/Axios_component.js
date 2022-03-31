import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Axios_component = () => {

    const [latitude, setlatitude] = useState(38.8951)
    const [longitude, setlongitude] = useState(-77.0364)
    let apiKey = 'b6a2736a6a4590424bbce6114483f7a6';


    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            console.log(response.data)
        }
        getData();
    })
    return (
        <div>
           <input  value={latitude}  onChange={(e)=>{setlatitude(e.target.value)}}   /  >
           <br/>
           <br/>
           <br/>
               <select name="" id=""   value={latitude}  onChange={(e)=>{setlatitude(e.target.value)}} >
                   <option value="38.8951">38.8951</option>
                   <option value="42.546245">	42.546245</option>
                   <option value="23.424076">	23.424076</option>
                   <option value="	33.93911">	33.93911</option>
               </select>
        </div>


    )
}

export default Axios_component