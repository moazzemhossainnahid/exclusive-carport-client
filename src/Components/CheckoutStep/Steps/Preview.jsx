import React, { useEffect, useState } from 'react';
import { useStepperContext } from '../../../Hooks/StepperContext';

const Preview = () => {

    const { userData } = useStepperContext();
    const [price, setPrice] = useState();

    const Hub = userData?.Hub && userData?.Hub;
    const AddOns1 = userData?.AddOns1 && userData?.AddOns1;
    const AddOns2 = userData?.AddOns2 && userData?.AddOns2;
    const AddOns3 = userData?.AddOns3 && userData?.AddOns3;

    useEffect(() => {
        if (Hub === 'Espresso') {
            if (AddOns1 === 'Milk' && AddOns2 === 'Cream' && AddOns3 === 'Latte') {
                setPrice(60 + 75 + 100);
            } else if (AddOns1 === 'Milk' && AddOns2 === 'Cream') {
                setPrice(60 + 75);
            } else if (AddOns3 === 'Latte' && AddOns2 === 'Cream') {
                setPrice(100 + 75);
            } else if (AddOns3 === 'Latte' && AddOns1 === 'Milk') {
                setPrice(100 + 60);
            } else if (AddOns3 === 'Latte') {
                setPrice(100);
            } else if (AddOns2 === 'Cream') {
                setPrice(75);
            } else if (AddOns1 === 'Milk') {
                setPrice(60);
            }
        }

    }, [AddOns1, AddOns2, AddOns3, Hub]);

    useEffect(() => {
        if (Hub === 'Cappuccino') {
            if (AddOns1 === 'Milk' && AddOns2 === 'Cream' && AddOns3 === 'Latte') {
                setPrice(80 + 90 + 125);
            } else if (AddOns1 === 'Milk' && AddOns2 === 'Cream') {
                setPrice(80 + 90);
            } else if (AddOns1 === 'Milk' && AddOns3 === 'Latte') {
                setPrice(80 + 125);
            } else if (AddOns3 === 'Latte' && AddOns2 === 'Cream') {
                setPrice(125 + 90);
            } else if (AddOns3 === 'Latte') {
                setPrice(125);
            } else if (AddOns2 === 'Cream') {
                setPrice(90);
            } else if (AddOns1 === 'Milk') {
                setPrice(80);
            }
        }

    }, [AddOns1, AddOns2, AddOns3, Hub]);

    useEffect(() => {
        if (Hub === 'Latte') {
            if (AddOns1 === 'Milk' && AddOns2 === 'Cream' && AddOns3 === 'Latte') {
                setPrice(100 + 125 + 150);
            } else if (AddOns1 === 'Milk' && AddOns2 === 'Cream') {
                setPrice(100 + 125);
            } else if (AddOns1 === 'Milk' && AddOns3 === 'Latte') {
                setPrice(100 + 150);
            } else if (AddOns3 === 'Latte' && AddOns2 === 'Cream') {
                setPrice(150 + 125);
            } else if (AddOns3 === 'Latte') {
                setPrice(150);
            } else if (AddOns2 === 'Cream') {
                setPrice(125);
            } else if (AddOns1 === 'Milk') {
                setPrice(100);
            }
        }

    }, [AddOns1, AddOns2, AddOns3, Hub]);

    console.log(userData);

    return (
        <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/003/567/016/original/coffee-background-with-realistic-cup-of-coffee-vector.jpg')] bg-cover p-0 m-0">
            <div className="h-full md:h-96 w-full flex flex-col justify-center items-center md:flex-row">
                <div className="w-full md:w-3/6 pb-7">
                    <h3 className="text-4xl font-bold py-5 text-orange-500">Total Cost</h3>
                    <h3 className="text-3xl md:text-7xl font-bold text-gray-800">{price}</h3>
                </div>
                <div className="w-full md:w-3/6 space-y-5 mx-auto py-7 px-5 md:pl-20 ">
                    <h3 className="text-4xl text-white">Hub: {Hub}</h3>
                    <h3 className="text-3xl text-white">Flavour: <span className="text-rose-700">{` ${AddOns1 ? AddOns1 : ''}, ${AddOns2 ? AddOns2 : ''}, ${AddOns3 ? AddOns3 : ''}`}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Preview;