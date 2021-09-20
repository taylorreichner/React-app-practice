import React, { useEffect, useState } from 'react';
import Cat from '../components/app/home/fact';
import CatFetch from '../components/app/home/Load';
import { getCat, getDog } from '../services/coinApi';

const DetailCat = () => {
    const [cat, setCat] = useState({})
    const [dog, setDog] = useState({})

    const handleClick = async () => {
        const cat = await getCat();
        const dog = await getDog();
        setCat(cat)
        setDog(dog)
    }

    
    return (
        <>
        <CatFetch onClick={handleClick}/>
        <Cat {...dog} {...cat}/>
        </>
    )

}

export default DetailCat;
