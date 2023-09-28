import Link from "next/link";

const navitems = [
    {
        "path": "/",
        "title": "Home"
    },
    {
        "path": "/about",
        "title": "About"
    },
    {
        "path": "/profile",
        "title": "Profile"
    },
    {
        "path": "/blog",
        "title": "Blog"
    },
    {
        "path": "/dashboard",
        "title": "Dashboard"
    },
]

const Navber = () => {
    return (
        <div className="flex justify-between">
            <h1>Navber</h1>
            <ul className="flex">
                {
                    navitems.map(({ path, title }) => (<li key={path}><Link href={path} className="px-3 py-1 mr-2 border border-green-600 rounded-md block">{title}</Link></li>))
                }
            </ul>
        </div>
    );
};

export default Navber;