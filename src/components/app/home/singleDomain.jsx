import React from 'react';
import PropTypes from 'prop-types';

const SingleDomain = ({name, issued, country}) => {
    <div>
        
        <div>{name}</div>
        <div>{issued}</div>
        <country>{country}</country>

    </div>

    SingleDomain.propTypes = {
        name: PropTypes.string,
        issued: PropTypes.string,
        country: PropTypes.string,
    }

}

export default SingleDomain;