import { useEffect, useState } from 'react';


const UseMChair = () => {
    const [chairs, setChairs] = useState();
    const [chairLoading, setChairLoading] = useState(true);

    useEffect(() => {
        fetch(`/massagechair.json`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data",data);
                setChairs(data);
                setChairLoading(false);
            })

    }, []);


    return [chairs, chairLoading];
};

export default UseMChair;