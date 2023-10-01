import Sidebar from "@/components/Sidebar";

const layout = ({children}) => {
    return (
        <div className="flex gap-6 max-w-screen-xl mx-auto">
            <Sidebar/>
            {children}
        </div>
    );
};

export default layout;