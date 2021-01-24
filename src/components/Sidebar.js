import React, { useState, Fragment, useEffect } from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Sidebar.css';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';
import {IconContext} from "react-icons";

//range slider
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


function Sidebar({
                    pointSize,
                    setPointSize,
                    iterations,
                    setIterations,
                    scaleMultiplier,
                    setScaleMultiplier,
                    erosionMultiplier,
                    setErosionMultiplier,
                    depositionMultiplier,
                    setDepositionMultiplier,
                    evaporationMultiplier,
                    setEvaporationMultiplier,
                    worldSizeScale,
                    setWorldSizeScale,
                    buttonGenerate,
                    setButtonGenerate,
                    objectDensity,
                    setObjectDensity
}) {
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
                    <h3> Objects density </h3>
                    <RangeSlider
                        value={objectDensity}
                        onChange={changeEvent => setObjectDensity(changeEvent.target.value)}
                        tooltipPlacement="top"
                        min={50}
                        max={200}
                        step={10}
                    />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Point Size </h3>
                    <RangeSlider
                        value={pointSize}
                        onChange={changeEvent => setPointSize(changeEvent.target.value)}
                        tooltipPlacement="top"
                        min={250}
                        max={1000}
                        step={10}
                    />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Iterations </h3>
                    <RangeSlider
                        value={iterations}
                        onChange={changeEvent => setIterations(changeEvent.target.value)}
                        tooltipPlacement="top"
                        min={200}
                        max={400}
                        step={10}
                    />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Scale Multiplier </h3>
                        <RangeSlider
                            value={scaleMultiplier}
                            onChange={changeEvent => setScaleMultiplier(changeEvent.target.value)}
                            tooltipPlacement="top"
                            min={1}
                            max={10}
                            step={0.2}
                        />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Erosion Multiplier </h3>
                        <RangeSlider
                            value={erosionMultiplier}
                            onChange={changeEvent => setErosionMultiplier(changeEvent.target.value)}
                            tooltipPlacement="top"
                            min={0.1}
                            max={1}
                            step={0.1}
                        />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Evaporation Multiplier </h3>
                        <RangeSlider
                            value={evaporationMultiplier}
                            onChange={changeEvent => setEvaporationMultiplier(changeEvent.target.value)}
                            tooltipPlacement="top"
                            min={0.1}
                            max={1}
                            step={0.1}
                        />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Deposition Multiplier </h3>
                        <RangeSlider
                            value={depositionMultiplier}
                            onChange={changeEvent => setDepositionMultiplier(changeEvent.target.value)}
                            tooltipPlacement="top"
                            min={0.1}
                            max={1}
                            step={0.1}
                        />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> World Size Scale </h3>
                        <RangeSlider
                            value={worldSizeScale}
                            onChange={changeEvent => setWorldSizeScale(changeEvent.target.value)}
                            tooltipPlacement="top"
                            min={1}
                            max={10}
                            step={0.2}
                        />
                </Nav.Item>
                <Nav.Item className="sliderDiv">
                    <h3> Generate New World </h3>
                        <input type="button" value="Generate" onClick={(event) => setButtonGenerate(!buttonGenerate)} />
                </Nav.Item>
            </Nav>
        </Fragment>
    )
}

export default Sidebar;