import Link from "next/link";

const Category = ({ category }) => {
    const { name, id } = category;
    return (
        <div>
            <Link href={`/products?categoryId=${id}`} className="border border-green-600 rounded-lg text-center py-1 block">{name}</Link>
        </div>
    );
};

export default Category;