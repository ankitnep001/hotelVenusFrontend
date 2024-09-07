import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";

const AdminTemplate = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f4f5fa]">
            <Navbar />
            <div className="flex flex-1 ml-5 mr-8 py-6">
                <Sidebar />
                <div className="flex flex-col flex-1 ml-6">
                    <div className="flex-1 overflow-auto mb-6 ">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AdminTemplate;
