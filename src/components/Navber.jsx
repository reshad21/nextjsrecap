"use client"
import Link from "next/link";
import { useSelector } from "react-redux";
import { navitems } from './../data/navdata';

const navData = navitems || [];

const Navber = () => {
    const cart = useSelector((state) => state.cart.cart);
    return (
        <div className="flex justify-between p-8">
            <h1 className="text-2xl font-bold">ShopZone</h1>
            <ul className="flex items-center">
                {
                    navData.map(({ path, title }) => (<li key={path}><Link href={path} className="px-3 py-1 mr-2 border border-green-600 rounded-md block">{title}</Link></li>))
                }

                <Link href="/cart" className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    {
                        (cart.length > 0) && <span className="absolute inset-0 object-right-top">
                            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                {cart.length}
                            </div>
                        </span>
                    }
                </Link>
            </ul>
        </div>
    );
};

export default Navber;