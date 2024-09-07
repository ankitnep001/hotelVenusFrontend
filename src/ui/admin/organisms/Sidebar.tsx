// Sidebar.tsx
import { adminSidebar } from "@data/adminSidebar"; // Adjust the import path if necessary
import { adminSidebarIcon } from "@ui/admin/atoms/SidebarIcon";
import ConfirmationBox from "@ui/common/molecules/ConfirmationBox";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
const Sidebar = () => {
    const navigate = useNavigate();

    const [modal, setModal] = useState<boolean>(false);

    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }

    const handleLogout = () => {
        localStorage.removeItem('HotelVenusLastLogin');
        localStorage.removeItem('HotelVenusName');
        navigate('/');
    };
    return (
        <div className="bg-[#ffffff] left-0 px-3 pb-8 pt-3 border-1 border-[#e4e4f4] h-screen">
            <ul>
                {adminSidebar.map((item) => (

                    <li key={item.id} title={item.title} className="mb-4 hover:bg-[#f7f8fc] flex items-center gap-x-2 px-4 py-2 ">
                        <span className="mr-2 text-[#56595a] h-4 w-4">
                            {adminSidebarIcon[item.label]} {/* Display the icon */}
                        </span>
                        <Link to={item.route} className="text-[#56595a] ">
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li onClick={openModal} className=" flex gap-x-2 mb-4 hover:bg-[#f7f8fc] px-4 py-2 text-[#56595a] hover:cursor-pointer">

                    <span><IoLogOutOutline size={22} /></span>Logout
                </li>
            </ul>

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <ConfirmationBox onClose={closeModal} message='Logout' onConfirm={handleLogout} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
