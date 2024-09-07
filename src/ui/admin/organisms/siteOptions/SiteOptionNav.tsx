import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const SiteOptionNav = () => {
    return (
        <nav className="flex py-2 w-full">
            <ul className="flex justify-between w-full text-[#427bff] py-2">
                <li className="p-2">
                    <NavLink
                        to="/admin/options?tab=header"
                        className={({ isActive }) => (isActive ? "bg-[#6b3aa3] text-white p-2 rounded-sm" : "p-2")}
                        end
                    >
                        Header
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink
                        to="/admin/options?tab=footer"
                        className={({ isActive }) => (isActive ? "bg-[#6b3aa3] text-white p-2 rounded-sm" : "p-2")}
                        end
                    >
                        Footer
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink
                        to="/admin/options?tab=info"
                        className={({ isActive }) => (isActive ? "bg-[#6b3aa3] text-white p-2 rounded-sm" : "p-2")}
                        end
                    >
                        Info Section
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink
                        to="/admin/options?tab=social"
                        className={({ isActive }) => (isActive ? "bg-[#6b3aa3] text-white p-2 rounded-sm" : "p-2")}
                        end
                    >
                        Social Media
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SiteOptionNav;
