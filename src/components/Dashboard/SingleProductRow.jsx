
const SingleProductRow = () => {
    return (
        <div>
            <tr>
                <td class="border border-slate-300 px-3">Indiana</td>
                <td class="border border-slate-300 px-3">Indianapolis</td>
                <td class="border border-slate-300 text-center">
                    <button className="bg-green-700 text-white px-2 rounded my-2">Update</button>
                </td>
                <td class="border border-slate-300 text-center">
                    <button className="bg-rose-700 text-white px-2 rounded my-2">Delete</button>
                </td>
            </tr>
        </div>
    );
};

export default SingleProductRow;