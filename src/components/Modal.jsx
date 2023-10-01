"use client"
import { forwardRef } from 'react';

const Modal = ({ closeModal }, ref) => {
    return (
        <div>
            <dialog ref={ref} className='p-4'>
                <button autoFocus onClick={() => closeModal()} className='bg-slate-800 text-white px-2 rounded-md my-2'>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
        </div>
    );
};

export default forwardRef(Modal);
