import React, { Fragment} from 'react';
import '../styles/Layout.css';

function layout(props) {
    return (
        <div className="Main">
        <Fragment>
            {props.children}
        </Fragment>
        </div>
    )
}

export default layout;