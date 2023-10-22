
const Cart = () => {
    return (
        <div className="border border-green-700 rounded-md p-4 flex justify-between items-center">
            <h1>Product Name: </h1>
            <div className="flex items-center p-1 gap-2">
                <button><span className="border-[3px] border-slate-400 px-2 py-1 text-lg font-bold">-</span></button>
                <span className="text-lg font-bold">0</span>
                <button><span className="border-[3px] border-slate-400 px-2 py-1 text-lg font-bold">+</span></button>
            </div>
            <div>Total=</div>
        </div>
    );
};

export default Cart;