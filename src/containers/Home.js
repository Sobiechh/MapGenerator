import React, { useState } from 'react';
import Terrain from "./Terrain";
import Sidebar from '../components/Sidebar';

function Home() {
    const [x, setX ] = useState(30);
    const [y, setY ] = useState(30);

    return (
        <div className = 'home'>
            <Sidebar x={x} setX={setX} y={y} setY={setY} />
            <Terrain x={x} y={y}/>
        </div>
    );
}

export default Home;
