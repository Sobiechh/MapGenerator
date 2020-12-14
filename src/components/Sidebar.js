import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Sidebar.css';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';
import {IconContext} from "react-icons";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
                <Nav.Item className="hide">
                    <Nav.Link>
                        <p onClick={showSidebar} className="arrowIcon"> 
                        <IconContext.Provider value={{ className: 'arrowIcon'}}>
                            {sidebar ? <FaArrowCircleLeft/>  : <FaArrowCircleRight/>}
                        </IconContext.Provider>
                        </p>
                    </Nav.Link>
                </Nav.Item>
            <Nav variant="tabs" defaultActiveKey="/home" className={sidebar ? 'sidebar_hide' : 'sidebar_active'}>
                <Nav.Item>
                    {/* default empty */}
                    {/* {sidebar ? 'disactive' : 'active'} */}
                </Nav.Item>
                <Nav.Item>
                    Item1
                </Nav.Item>
                <Nav.Item>
                    Item2
                </Nav.Item>
                <Nav.Item>
                    Item3
                </Nav.Item>
                <Nav.Item>
                    Item4
                </Nav.Item>
                <Nav.Item>
                    Item5
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Sidebar;