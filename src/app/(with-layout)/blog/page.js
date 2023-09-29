import getAllBlogs from "@/utils/getAllBlogs";
import Link from "next/link";

export const metadata = {
    title: 'Blog',
    description: 'Next Hero',
}
const BlogPage = async () => {
    const blogs = await getAllBlogs();
    
    return (
        <div className="flex flex-col gap-3 my-2 px-10">
            {
                blogs.map(({ id, title, body }) => (
                    <div key={id} className="border rounded-lg p-3 border-green-500">
                        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                        <p>{body}</p>
                        <Link href={`/blog/${id}`} className="font-bold bg-yellow-400 border-blue-900 rounded-md px-3 py-1" >Details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;