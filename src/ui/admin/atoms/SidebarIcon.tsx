import { FaCogs, FaFileAlt, FaImages, FaUsers, FaWrench } from "react-icons/fa"; // Import icons from react-icons
import { LuLayoutDashboard } from "react-icons/lu";

export const adminSidebarIcon: { [key: string]: JSX.Element } = {
    "Dashboard": <LuLayoutDashboard size={20} />,
    "Site Options": <FaCogs />,
    "Posts": <FaFileAlt />,
    "Pages": <FaFileAlt />,
    "Media": <FaImages />,
    "Users": <FaUsers />,
    "Settings": <FaWrench />
};