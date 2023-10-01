import ManageProduct from "@/components/Dashboard/ManageProduct";

export const metadata = {
    title: 'Manage-product',
    description: 'Next Hero',
}
const page = () => {
    return (
        <div className="w-full">
            <h1>Manage all products</h1>
            <ManageProduct/>
        </div>
    );
};

export default page;