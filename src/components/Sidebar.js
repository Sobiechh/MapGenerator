import React, { useState, Fragment, useEffect } from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Sidebar.css';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';
import {IconContext} from "react-icons";

//range slider
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const [ xValue, setValueX ] = useState(props.name);
    const [ yValue, setValueY ] = useState(0);

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
                        value={xValue}
                        onChange={changeEvent => setValueX(changeEvent.target.value)}
                        tooltipPlacement="top"
                    />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Długość y </h3>
                    <RangeSlider
                        value={yValue}
                        onChange={changeEvent => setValueY(changeEvent.target.value)}
                        tooltipPlacement="top"
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