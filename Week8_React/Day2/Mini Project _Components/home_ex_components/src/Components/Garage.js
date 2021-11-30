import React from 'react';

const Garage = (props) => {
    const { size } = props; //Part4
    return (
        <div>
            <h3>Who lives in my {size} Garage?</h3>
        </div>
    );
};

export default Garage;