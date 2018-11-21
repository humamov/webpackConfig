import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const Index = ()=>{
    return(
        <div>
            <h1 >humam</h1>
            <a className="button is-link">Link</a>
            <a className="button is-info">Info</a>
            <a className="button is-success">Success</a>
            <a className="button is-warning">Warning</a>
            <a className="button is-danger">Danger</a>
        </div>
    )
};
ReactDom.render(<Index/>,document.getElementById('root'));