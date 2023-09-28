import Link from 'next/link';

const sideitems = [
    {
        path: "/dashboard",
        title: "Dashboard"
    },
    {
        path: "/dashboard/add-product",
        title: "Add-Product"
    },
    {
        path: "/dashboard/manage-product",
        title: "Manage-Product"
    },
    {
        path: "/",
        title: "Home"
    }
]

const Sidebar = () => {
    return (
        <div className='w-[150px]'>
            <ul className='flex flex-col gap-3'>
                {
                    sideitems.map(({ path, title }) => (<li key={path}><Link href={path} className='text-center px-3 py-1 block border border-green-700 rounded-md'>{title}</Link></li>))
                }
            </ul>
        </div>
    );
};

export default Sidebar;