"use client";
import { decrease, increase } from "@/Redux/features/cart/cartSlice";
import Link from "next/link";
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
                        <h1 className="text-[13px] font-semibold">{product.title}</h1>
                        <div className="flex items-center gap-1 pl-6">

                            <button onClick={() => dispatch(decrease(product))}><span><AiOutlineMinusSquare size={20} width={14} /></span></button>

                            <span className="text-lg font-semibold">{product.quantity}</span>

                            <button onClick={() => dispatch(increase(product))}><span><AiOutlinePlusSquare size={20} width={14} /></span></button>

                        </div>
                        <div className="text-sm text-end"><span className="font-bold">Price: </span>{product.price}</div>
                    </div>
                )
            }
            {
                (products.length > 0)
                    ?

                    <div className="">
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold text-green-600">Total Amount:</p>
                            <span className="text-slate-600 text-sm font-semibold text-end px-1">${totalPrice}</span>
                        </div>
                        <div className="w-full bg-blue-700 mt-4 rounded-md">
                            <Link href="/checkout" className="w-full block p-2 text-white font-semibold text-center">Checkout</Link>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-center font-semibold">ADD TO CART YOUR PRODUCT</p>
                        {/* <span className="text-2xl">😊</span> */}
                        <span className="text-2xl">

                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="😀" width="32" height="32" />

                        </span>
                    </div>

            }

        </>


    );
};

export default Cart;