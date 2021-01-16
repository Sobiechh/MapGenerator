import React, { useState, Fragment } from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Sidebar.css';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';
import {IconContext} from "react-icons";

//range slider
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


function Sidebar({x, setX, y, setY}) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <Fragment>
                <p onClick={showSidebar} className="arrowIcon"> 
                <IconContext.Provider value={{ className: 'arrowIcon'}}>
                    {sidebar ? <FaArrowCircleLeft/>  : <FaArrowCircleRight/>}
                </IconContext.Provider>
                </p>
            <Nav defaultActiveKey="/home" className={sidebar ? ['sidebar_hide','flex-column'] : ['sidebar_active','flex-column']}>
                <Nav.Item className="sliderDiv">
                    <h3> Długość x </h3>
                    <RangeSlider
                        value={x}
                        onChange={changeEvent => setX(changeEvent.target.value)}
                        tooltipPlacement="top"
                        min={0}
                        max={1000}
                        step={10}
                    />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Długość y </h3>
                    <RangeSlider
                        value={y}
                        onChange={changeEvent => setY(changeEvent.target.value)}
                        tooltipPlacement="top"
                        min={0}
                        max={1000}
                        step={10}
                    />
                </Nav.Item>
                <Nav.Item>
                    {/* <button onClick={yValue}>
                        hehe
                    </button> */}
                </Nav.Item>
            </Nav>
        </Fragment>
    )
}

export default Sidebar;