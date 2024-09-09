import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";

const AdminTemplate = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <div className="flex flex-col min-h-screen bg-[#f4f5fa]">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="flex flex-1 py-6">
                    <Sidebar isOpen={isSidebarOpen} />
                    <div className={`flex flex-col flex-1 ml-6 transition-all duration-300 ${isSidebarOpen ? " " : ""}`}>
                        <div className={`flex-1 overflow-auto mb-6 transition-all duration-300 ${isSidebarOpen ? "" : "bg-opacity-50"}`}>
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminTemplate;
