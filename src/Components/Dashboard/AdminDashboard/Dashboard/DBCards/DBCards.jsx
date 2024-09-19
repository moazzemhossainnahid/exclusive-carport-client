import { faArrowAltCircleRight, faBookAtlas, faCartShopping, faListCheck, faPenToSquare, faRoadLock, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DBCards = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/appointments`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])


    return (
        <div className=''>
            <div className="grid grid-cols-1 gap-5 py-10">
                {/* Registered Users */}
                <div className="">
                    <div className="flex items-center justify-between bg-[#252525] p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{users?.length}</h3>
                            <h3 className="text-md font-bold text-white">Total Users</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faUsers} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/musers')} className="bg-[#1e1e1e] cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div>
                {/* Total Products */}
                {/* <div className="">
                    <div className="flex items-center justify-between bg-[#17A2BB] p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{products?.length}</h3>
                            <h3 className="text-md font-bold text-white">Total Products</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faCartShopping} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/mproducts')} className="bg-[#0c93ab] cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div> */}
                {/* Total Orders */}
                <div className="">
                    <div className="flex items-center justify-between bg-[#097c76] p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{orders?.length} </h3>
                            <h3 className="text-md font-bold text-white">Total Orders</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faListCheck} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/morders')} className="bg-[#00A099] cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div>

                {/* Total Appointments */}
                <div className="">
                    <div className="flex items-center justify-between bg-[#219422] p-3 rounded-t-xl">
                        <div className="">
                            <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">{appointments?.length}</h3>
                            <h3 className="text-md font-bold text-white">Total Appointments</h3>
                        </div>
                        <div className="">
                            <FontAwesomeIcon className='text-[#42424281] text-3xl md:text-4xl' icon={faBookAtlas} />
                        </div>
                    </div>
                    <div onClick={() => navigate('/cpanel/mappointments')} className="bg-[#186e1a] cursor-pointer py-2 text-center rounded-b-xl">
                        <h2 className="text-md text-white">More Info <FontAwesomeIcon className='pl-2' icon={faArrowAltCircleRight} /> </h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DBCards;