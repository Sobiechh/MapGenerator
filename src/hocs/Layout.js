import React, { Fragment} from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';

function layout(props) {
    return (
        <Fragment>
            <Sidebar />
            {props.children}
        </Fragment>
    )
}

export default layout;