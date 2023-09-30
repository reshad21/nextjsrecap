import Product from "@/components/Product";
import getAllproducts from "@/utils/getAllproducts";

const Popularproducts = async () => {
    const trendingProducts = await getAllproducts();
    console.log(trendingProducts.length);
    return (
        <div>
            <h1 className="text-xl font-semibold">Popular Products</h1>
            <div className="grid grid-cols-5 gap-3 my-3">
                {
                    trendingProducts.map((product) => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Popularproducts;