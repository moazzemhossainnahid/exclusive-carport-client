import React, { useEffect, useState } from 'react';
import DeleteAppointmentModal from './Modals/DeleteAppointmentModal';
import ManageAppointmentsRow from './ManageAppointmentsRow';

const ManageAppointments = () => {

    const [number, setNumber] = useState(0);
    const [appointments, setAppointments] = useState(null);
    const [deleteAppointment, setDeleteAppointment] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [number])


    // Sort the array by createdAt in descending order
    appointments?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Appointments: {appointments?.length}</p>
                    <table className="border-collapse w-full bg-slate-200">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className='text-center'>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">customer Name</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Appointment Date/Time</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}

                            {
                                appointments?.map((appointment, index) =>
                                    <ManageAppointmentsRow
                                        key={appointment?._id}
                                        appointment={appointment}
                                        index={index}
                                        setDeleteAppointment={setDeleteAppointment}
                                    ></ManageAppointmentsRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    deleteAppointment && <DeleteAppointmentModal deleteAppointment={deleteAppointment} setNumber={setNumber} number={number} ></DeleteAppointmentModal>
                }

            </div>
        </div>
    );
};

export default ManageAppointments;