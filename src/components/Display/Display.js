import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
    return (
        <div className="component-display">
            <div>
            {/* expecting this value to be a string */}
                {value} 
            </div>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;