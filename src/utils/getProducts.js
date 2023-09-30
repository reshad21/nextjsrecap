import wait from "./wait";

const getProducts = async (categoryId) => {
    await wait();
    const res = await fetch(`http://localhost:5000/products?categoryId=${categoryId}`);
    const data = await res.json();
    return data;
};

export default getProducts;