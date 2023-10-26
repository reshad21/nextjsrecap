import { TiDelete } from 'react-icons/ti';
import Cart from "./Cartpage/Cart";
const AddToCartModal = ({ closeModal }) => {
    return (
        <div className="absolute top-[90px] right-[40px] shadow-2xl">
            <div className="relative border border-green-600 rounded-md px-3 pt-10 w-96 h-[80vh] bg-white overflow-y-auto">
                <button onClick={() => closeModal(false)} className="text-xl font-bold absolute top-0 right-0"><TiDelete size={30} /></button>
                <Cart />
            </div>
        </div>
    );
};

export default AddToCartModal;