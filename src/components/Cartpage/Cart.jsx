"use client";
import { decrease, increase } from "@/Redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const products = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    return (
        (products.length > 0)
        &&
        products.map((product) =>
            <div className="border border-green-700 rounded-md p-4 flex justify-between items-center mb-3">
                <h1><span className="font-bold">Product Name:</span> {product.title}</h1>
                <div className="flex items-center p-1 gap-2">
                    <button onClick={() => dispatch(decrease(product))}><span className="border-[3px] border-slate-400 px-2 py-1 text-lg font-bold">-</span></button>
                    <span className="text-lg font-bold">{product.quantity}</span>
                    <button onClick={() => dispatch(increase(product))}><span className="border-[3px] border-slate-400 px-2 py-1 text-lg font-bold">+</span></button>
                </div>
                <div><span className="font-bold">Price: </span>{product.price}</div>
            </div>
        )

    );
};

export default Cart;