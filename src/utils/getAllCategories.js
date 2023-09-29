
const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();
    return data;
};

export default getAllCategories;