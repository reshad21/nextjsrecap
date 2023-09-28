import Sidebar from "@/components/Sidebar";

const layout = ({children}) => {
    return (
        <div className="flex gap-2">
            <Sidebar/>
            {children}
        </div>
    );
};

export default layout;