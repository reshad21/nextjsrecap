"use client"
import { forwardRef } from 'react';

const Modal = ({ closeModal, updateProduct }, ref) => {
    return (
        <div>
            <dialog ref={ref} className='p-4'>
                <button autoFocus onClick={() => closeModal()} className='bg-slate-800 text-white px-2 rounded-md my-2'>Close</button>
                <form action="">
                    <input type="text" name='title' className='border border-slate-700 rounded-sm w-full px-2 mb-3' defaultValue={updateProduct?.title} />
                    <input type="text" name='price' className='border border-slate-700 rounded-sm w-full px-2 mb-2' defaultValue={updateProduct?.price} />
                    <input type="submit" className='bg-green-800 text-white px-2 rounded-md my-2' />
                </form>
            </dialog>
        </div>
    );
};

export default forwardRef(Modal);
