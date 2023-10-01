import Link from "next/link";

const SingleProductRow = ({ product, openModal }) => {
    const { title, price, id } = product || [];
    return (
        <tr key={id}>
            <td className="border border-slate-300 px-3">{title}</td>
            <td className="border border-slate-300 px-3">{price}$</td>
            <td className="border border-slate-300 text-center">
                <Link href="" onClick={() => openModal(product)} className="bg-green-700 text-white px-2 py-1 rounded my-2">Update</Link>
            </td>
            <td className="border border-slate-300 text-center">
                <button className="bg-rose-700 text-white px-2 rounded my-2">Delete</button>
            </td>
        </tr>
    );
};

export default SingleProductRow;