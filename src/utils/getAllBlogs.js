
const getAllBlogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache"
    });
    const data = await res.json() || [];
    return data;
};

export default getAllBlogs;