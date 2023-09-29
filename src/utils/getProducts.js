
const getProducts = async (categoryId) => {
    const res = await fetch(`http://localhost:5000/products?categoryId=${categoryId}`);
    const data = await res.json();
    return data;
};

export default getProducts;