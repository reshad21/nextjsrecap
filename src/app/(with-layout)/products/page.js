import Product from "@/components/Product";
import getProducts from "@/utils/getProducts";
import getAllCategories from './../../../utils/getAllCategories';

const ProductsPage = async ({ searchParams }) => {
    const { categoryId } = searchParams;
    const products = await getProducts(categoryId);
    
    const category = await getAllCategories();
    const {name} = category.find((item) => item.id == categoryId);

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-5 px-4">{name}:</h1>
            <div className="px-4 grid grid-cols-5 gap-3">
                {
                    products.map((product) => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;