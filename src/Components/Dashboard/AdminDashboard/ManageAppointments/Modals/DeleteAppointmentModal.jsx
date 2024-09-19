
import { toast } from 'react-toastify';

const DeleteAppointmentModal = ({ deleteAppointment, setNumber, number }) => {

    const { createdAt, name, product, email, phone, address, message, _id } = deleteAppointment;

    const handleDelete = (id) => {
        const url = `http://localhost:5000/api/v1/appointments/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(`Appointment id (${_id}) has been deleted.`);
                    setNumber(number + 1);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative ">
                    <div className="absolute top-0 left-0 mix-blend-darken opacity-10">
                        <img src="https://www.security.org/app/uploads/2020/07/laptop-31.png" alt="" className="mix-blend-darken" />
                    </div>
                    <label htmlFor="delete-appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-xs text-white badge-error relative text-sm p-4'>{`Delete ${name}'s Appointment`}</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-3 relative">
                        <div className="w-full md:w-4/5 order-2 md:order-1">
                            <h3 className="font-bold text-3xl">{product}</h3>
                            <h4 className="text-xl font-semibold pt-4">Customer Information-</h4>
                            <p className='my-4'><span className="font-bold">Name:</span> {name}</p>
                            <p className='my-4'><span className="font-bold">Phone:</span> {phone}</p>
                            <p className='my-4'><span className="font-bold">Email:</span> {email}</p>
                            <p className='my-4'><span className="font-bold">Address:</span> {address}</p>
                            <p className='my-4'><span className="font-bold">Message:</span> {message}</p>
                        </div>
                        <div className="w-full md:w-1/5 order-1 md:order-2">
                            <img src={`https://media.istockphoto.com/id/538329926/vector/customer-support-vecot-icon-phone-assistant-logo.jpg?s=612x612&w=0&k=20&c=emj-_aWYs9yaOGDDVqYPfMtaIOixV2yP0BRAqyt35RM=`} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                        </div>
                    </div>
                    <div className="modal-action relative">
                        <label htmlFor="delete-appointment-modal" onClick={() => handleDelete(_id)} className="btn">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteAppointmentModal;