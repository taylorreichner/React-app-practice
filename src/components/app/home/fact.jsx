import React from 'react';
import PropTypes from 'prop-types';

const Cat = ({cat, dog}) => (
    <figure>
        <img src={cat} />
        <img src={dog} />
    </figure>
    
) 
    Cat.propTypes = {
    cat: PropTypes.string,
    dog: PropTypes.string,
}

export default Cat;