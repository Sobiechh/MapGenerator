import React, { useState, useEffect } from 'react';
import Terrain from "./Terrain";
import Sidebar from '../components/Sidebar';

function Home() {
    const [ xValue ] = useState(0);

    return (
        <div className = 'home'>
            <Sidebar name={xValue}/>
            <Terrain/>
        </div>
    );
}

export default Home;
