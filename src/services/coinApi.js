export const getCat = async () => {
    const res = await fetch (`https://aws.random.cat/meow`);
    
    const req = await res.json()
    

    console.log(req)
    return {
        cat: req.file,
    }
}

export const getDog = async () => {
    const dogRes = await fetch (`https://random.dog/woof.json`);
    const dogReq = await dogRes.json()
    

    console.log(dogReq)
    return {
        dog: dogReq.url,
    }
}