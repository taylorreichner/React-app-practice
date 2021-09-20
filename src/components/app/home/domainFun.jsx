import React from 'react';
import PropTypes from 'prop-types';

const DomainFunc = ({onClick, company, onChange}) => (
    <>
    <h1>Search domains</h1>
    
        <input type="text" value={company} onChange={onChange}/>
        <button onClick={onClick}> search </button>
    
    </>
)

DomainFunc.propTypes = {
    onClick: PropTypes.func,
    company: PropTypes.string,
    onChange: PropTypes.func,
}

export default DomainFunc;