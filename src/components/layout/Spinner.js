import React from 'react';
import spinner from './spinner.gif';

export default () => {
    return (
        <div>
            <img src={spinner} alt="Loading..." style={{width: '130px', margin: 'auto', marginTop:'10vh', display: 'block'}} />
        </div>
    );
};
