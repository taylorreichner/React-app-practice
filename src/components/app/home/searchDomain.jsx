import React from 'react';
import PropTypes from 'prop-types';
import SingleDomain from './singleDomain';

const DomainList = ({ domains }) => {
   
    const domainItems = domains.map(domain => (
        <li key={domain.name}>
            <SingleDomain {...domain} />
        </li>
    ))

    return (
        <ul aria-label="domain">
            {domainItems}

        </ul>
    )}

    DomainList.propTypes = {
        domains: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                issued: PropTypes.string,
                country: PropTypes.string,
            })
        )
    }

export default DomainList;