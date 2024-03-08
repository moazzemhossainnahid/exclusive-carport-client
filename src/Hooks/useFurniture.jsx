import { useEffect, useState } from 'react';


const UseFurniture = () => {
    const [furnitures, setFurnitures] = useState();
    const [furnitureLoading, setFurnitureLoading] = useState(true);

    useEffect(() => {
        fetch(`/furniture.json`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data",data);
                setFurnitures(data);
                setFurnitureLoading(false);
            })

    }, []);


    return [furnitures, furnitureLoading];
};

export default UseFurniture;