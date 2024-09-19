import React, { useEffect, useState } from 'react';
import ManageProductsRow from './ManageProductsRow';
import DeleteProductModal from './Modals/DeleteProductModal';

const ManageProducts = () => {

    const [number, setNumber] = useState(0);
    const [products, setProducts] = useState(null);
    const [deleteProduct, setDeleteProduct] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [number])


    return (
        <div className=" text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 px-8 mb-20">
                    <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Total Products: {products?.length}</p>
                    <table className="border-collapse w-full bg-slate-200">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className='text-center'>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">customer Id</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Order Date</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Payment Status</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}

                            {
                                products?.map((product, index) =>
                                    <ManageProductsRow
                                        key={product?._id}
                                        product={product}
                                        index={index}
                                        setDeleteProduct={setDeleteProduct}
                                    ></ManageProductsRow>)
                            }

                        </tbody>
                    </table>
                </div>
                {
                    deleteProduct && <DeleteProductModal deleteProduct={deleteProduct} setNumber={setNumber} number={number} ></DeleteProductModal>
                }

            </div>
        </div>
    );
};

export default ManageProducts;