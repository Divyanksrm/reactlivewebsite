import React, { useState, useEffect } from "react";
// import "./wheather.css";
import WCard from "./whCard";

const Temp = () => {

    const [searchV, setSearchV] = useState("Delhi");
    const [tempInfo,setTemp]=useState({});

    const getWheather = async () => {
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchV}&units=metric&appid=872bfa7e69c96f817f3d577d611dc3b2`;
            let res = await fetch(url);
            let data = await res.json();



          const { temp, humidity, pressure } = data.main;

const { main: weathermood } = data.weather[0];

const { name } = data;

const { speed } = data.wind;

const { country, sunset } = data.sys;

           console.log(data);
            

            const myNewWh={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,sunset
            };
            setTemp(myNewWh)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWheather();
    }, []);


    return (

        <>

            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Search.."
                        id="search"
                        className="searchTerm"
                        value={searchV}
                        onChange={(e) => setSearchV(e.target.value)}
                    />



                    <button className="  btn-outline-primary" type="button" onClick={getWheather}>
                        Search

                    </button>
                </div>


            </div>
            
<WCard  {...tempInfo}/>


        </>

    )

};
export default Temp;