import ManageProduct from "@/components/Dashboard/ManageProduct";
import getAllproducts from "@/utils/getAllproducts";

export const metadata = {
    title: 'Manage-product',
    description: 'Next Hero',
}
const page = async() => {
    const products =await getAllproducts();
    return (
        <div className="w-full">
            <h1 className="my-4 text-center font-semibold text-2xl">Manage all products</h1>
            <ManageProduct products={products}/>
        </div>
    );
};

export default page;