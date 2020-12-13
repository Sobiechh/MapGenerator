import React, { useState } from 'react';
import {Nav} from 'react-bootstrap';
import '../styles/Sidebar.css';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <Nav variant="tabs" defaultActiveKey="/home" className={sidebar ? 'sidebar' : 'sidebar_active'}>
                <Nav.Item>
                    <Nav.Link>
                        <p onClick={showSidebar}> XXX </p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {sidebar ? 'disactive' : 'active'}
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
            </Nav>
        </>
    )
}

export default Sidebar;