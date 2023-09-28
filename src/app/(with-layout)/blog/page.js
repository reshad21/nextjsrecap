import Link from "next/link";

export const metadata = {
    title: 'Blog',
    description: 'Next Hero',
}
const BlogPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await res.json() || [];
    console.log("total blogs is", blogs.length);
    return (
        <div className="flex flex-col gap-3 my-2 px-10">
            {
                blogs.map(({ id, title, body, userId }) => (
                    <div key={id} className="border rounded-lg p-3 border-green-500">
                        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                        <p>{body}</p>
                        <Link href={{
                            pathname: `/blog/${id}`,
                            query: {
                                title: title
                            }
                        }}>Details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;