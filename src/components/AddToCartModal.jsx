import { TiDelete } from 'react-icons/ti';
import Cart from "./Cartpage/Cart";
const AddToCartModal = ({ closeModal }) => {
    return (
        <div className="absolute top-[90px] right-[40px] shadow-2xl bg-blue-50">
            <div className="relative border border-green-600 rounded-md px-3 pt-10 pb-3 w-96 max-h-[80vh] overflow-y-auto">
                <button onClick={() => closeModal(false)} className="text-xl font-bold absolute top-0 right-0"><TiDelete size={30} /></button>
                <Cart />
            </div>
        </div>
    );
};

export default AddToCartModal;