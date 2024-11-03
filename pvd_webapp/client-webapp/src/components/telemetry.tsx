import React, { useState, useEffect } from 'react';


export default function Telemetry() {
    const [currentLat, setCurrentLat] = useState(null);
    const [currentLong, setCurrentLong] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
    //     const interval = setInterval(() => {
            fetch('http://127.0.0.1:5000/telemetry').then(res => res.json()).then(data => {
        
            setCurrentLat(data.latitude);
            setCurrentLong(data.longitude);
            setCurrentTime(data.end);
        });
    // }, 30000);
    //     return () => clearInterval(interval);
      }, []);
    
    
    return (<>
        <div className="telemtry-container">
            <p>Latitude: {currentLat}</p>
            <p>Longitude: {currentLong}</p>
            <p>Timestamp: {currentTime}</p>

        </div>
    </>)
}