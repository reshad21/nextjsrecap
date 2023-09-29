
const getSingleBlog = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache"
    });
    const data = await res.json();
    return data;
};

export default getSingleBlog;