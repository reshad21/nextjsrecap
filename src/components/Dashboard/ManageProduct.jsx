"use client"
import { useRef, useState } from "react";
import Modal from "../Modal";
import SingleProductRow from "./SingleProductRow";

const ManageProduct = ({ products }) => {
    const modalRef = useRef(null);
    const [updateProduct, setUpdateProduct] = useState(null);

    const openModal = (product) => {
        setUpdateProduct(product);
        modalRef.current.showModal();
    }
    const closeModal = () => {
        modalRef.current.close();
    }

    return (
        <div className="w-full">
            <table className="w-full border-collapse border border-slate-400 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-300 ...">Title</th>
                        <th className="border border-slate-300 ...">Price</th>
                        <th className="border border-slate-300 ...">Update</th>
                        <th className="border border-slate-300 ...">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => <SingleProductRow key={product.id} product={product} openModal={openModal} />)
                    }
                </tbody>
            </table>
            <Modal ref={modalRef} closeModal={closeModal} updateProduct={updateProduct} />
        </div>
    );
};

export default ManageProduct;