import Footer from "@/components/Footer";
import Navber from "@/components/Navber";

const layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen container mx-auto">
            <Navber/>
                {children}
            <Footer/>
        </div>
    );
};

export default layout;