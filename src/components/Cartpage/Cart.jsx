"use client";
import { decrease, increase } from "@/Redux/features/cart/cartSlice";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const products = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();
    return (
        <>
            {
                (products.length > 0)
                &&
                products.map((product) =>
                    <div className="border border-green-700 rounded-md p-1 mb-3 grid grid-cols-3 items-center">
                        <h1 className="text-sm"><span className="font-semibold">{product.title}</span></h1>
                        <div className="flex items-center gap-1 pl-6">

                            <button onClick={() => dispatch(decrease(product))}><span><AiOutlineMinusSquare size={20} width={14} /></span></button>

                            <span className="text-lg font-semibold">{product.quantity}</span>

                            <button onClick={() => dispatch(increase(product))}><span><AiOutlinePlusSquare size={20} width={14} /></span></button>

                        </div>
                        <div className="text-sm text-center"><span className="font-bold">Price: </span>{product.price}</div>
                    </div>
                )
            }
            <p className="text-end text-sm font-semibold px-1 text-green-600">Total Price: <span className="text-slate-600">{totalPrice}$</span></p>
        </>


    );
};

export default Cart;