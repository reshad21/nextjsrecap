
const getAllproducts = async() => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
};

export default getAllproducts;