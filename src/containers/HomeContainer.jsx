import React, { useEffect, useState } from 'react';
import DomainFunc from '../components/app/home/domainFun';
import Cat from '../components/app/home/fact';
import CatFetch from '../components/app/home/Load';
import DomainList from '../components/app/home/searchDomain';
import { getCat, getDog, searchDomain } from '../services/coinApi';

const DetailCat = () => {
    const [cat, setCat] = useState({})
    const [dog, setDog] = useState({})
    const [domains, setDomains] = useState([])
    const [company, setCompany] = useState('')



    const handleClick = async () => {
        const cat = await getCat();
        const dog = await getDog();
        setCat(cat)
        setDog(dog)
    }

    const handleSearchSubmit = async () => {
        const domains = await searchDomain(company)
        setDomains(domains)

    }

    const handleInputChange = (e) => {
        setCompany(e.target.value);
       
      }; 

    
    return (
        <>
        <DomainFunc value={company} onChange={handleInputChange} onClick={handleSearchSubmit}/>
        <DomainList  domains={domains}/>
        <CatFetch onClick={handleClick}/>
        <Cat {...dog} {...cat}/>
        </>
    )

}

export default DetailCat;
