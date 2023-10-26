import Cart from "./Cartpage/Cart";

const AddToCartModal = ({ closeModal }) => {
    return (
        <div className="absolute top-[90px] right-[40px]">
            <div className="relative border border-green-600 rounded-md p-4 py-7 w-96 h-[80vh] bg-white">
                <button onClick={() => closeModal(false)} className="text-xl font-bold absolute top-1 right-2">X</button>
                <Cart />
            </div>
        </div>
    );
};

export default AddToCartModal;