"use client"
import { forwardRef } from 'react';

const Modal = (props, ref) => {
    return (
        <div>
            <dialog ref={ref}>
                <button autoFocus>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
        </div>
    );
};

export default forwardRef(Modal);
