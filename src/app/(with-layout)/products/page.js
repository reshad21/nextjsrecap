import Product from "@/components/Product";
import getProducts from "@/utils/getProducts";

const ProductsPage = async ({ searchParams }) => {
    const { categoryId } = searchParams;
    const products = await getProducts(categoryId);
    return (
        <div>
            <div className="px-4 grid grid-cols-3 gap-3">
                {
                    products.map((product) => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;