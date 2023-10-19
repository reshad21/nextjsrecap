"use client";

import { addToCart } from "@/Redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
    const { title, price, features, id } = product;
    const dispatch = useDispatch();
    const handleAddToCart = (id) => {
        dispatch(addToCart());
        console.log(id);
    }
    return (
        <div className="border border-green-500 rounded-md p-4 pb-1 block">
            <h1 className="font-semibold mb-3">{title}</h1>
            <p className="mb-1">Price: <span className="font-bold text-red-800">{price}$</span></p>
            Features:<ul>
                {
                    features.map((feature, index) => <li key={feature}><span className="text-[13px]">{index + 1}</span>. <span className="text-[13px] font-semibold">{feature}</span></li>)
                }
            </ul>
            <div className="flex justify-between items-center mt-4 mb-2">
                <button className="text-[14px] font-semibold border border-green-500 rounded-md px-1 bg-yellow-500 text-white" onClick={handleAddToCart}>AddToCart</button>
                <button className="text-[14px] font-semibold border border-green-500 rounded-md px-1 bg-green-500 text-white">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;