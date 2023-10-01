
const SingleProductRow = ({ product }) => {
    const { title, price } = product || [];
    return (
        <tr>
            <td className="border border-slate-300 px-3">{title}</td>
            <td className="border border-slate-300 px-3">{price}$</td>
            <td className="border border-slate-300 text-center">
                <button className="bg-green-700 text-white px-2 rounded my-2">Update</button>
            </td>
            <td className="border border-slate-300 text-center">
                <button className="bg-rose-700 text-white px-2 rounded my-2">Delete</button>
            </td>
        </tr>
    );
};

export default SingleProductRow;