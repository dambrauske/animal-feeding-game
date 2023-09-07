import React from 'react';

const Progressbar = ({width}) => {

    return (
        <div className="w-96 h-8 border rounded">
            <div
                style={{width: `${width}%`}}
                className="h-full rounded bg-green-500"></div>
        </div>
    );
};

export default Progressbar;
