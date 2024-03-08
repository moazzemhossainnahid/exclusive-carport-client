import { useEffect, useState } from 'react';


const UseCarport = () => {
    const [carports, setCarports] = useState();
    const [carportLoading, setCarportLoading] = useState(true);

    useEffect(() => {
        fetch(`/carport.json`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data",data);
                setCarports(data);
                setCarportLoading(false);
            })

    }, []);


    return [carports, carportLoading];
};

export default UseCarport;