"use client"
import { useRef } from "react";
import Modal from "../Modal";

const ManageProduct = () => {
    const modalRef = useRef(null);
    return (
        <div className="w-full">
            <table class="w-full border-collapse border border-slate-400 ...">
                <thead>
                    <tr>
                        <th class="border border-slate-300 ...">Title</th>
                        <th class="border border-slate-300 ...">Price</th>
                        <th class="border border-slate-300 ...">Update</th>
                        <th class="border border-slate-300 ...">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 px-3">Indiana</td>
                        <td class="border border-slate-300 px-3">Indianapolis</td>
                        <td class="border border-slate-300 text-center">
                            <button className="bg-green-700 text-white px-2 rounded my-2">Update</button>
                        </td>
                        <td class="border border-slate-300 text-center">
                            <button className="bg-rose-700 text-white px-2 rounded my-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Modal ref={modalRef} />
        </div>
    );
};

export default ManageProduct;