import getSingleBlog from "@/utils/getSingleBlog";


export const generateMetaData = async ({ params }) => {
    // console.log(params);
    const { title } = await getSingleBlog(params.id);
    return {
        title: title,
        description: title,
    }
}

const SingleBlog = async ({ params }) => {
    const blog = await getSingleBlog(params.id);
    const { id, title, body } = blog;
    return (
        <div key={id} className="border rounded-lg p-3 border-green-500">
            <h1 className="text-2xl font-semibold mb-2">{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default SingleBlog;