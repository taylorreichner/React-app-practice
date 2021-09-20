import React from 'react';
import PropTypes from 'prop-types';

const CatFetch = ({onClick}) => (
    <>
        <h2>Get a cat and dog</h2>
        <button onClick={onClick}>Search</button>

    </>
)

CatFetch.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CatFetch;