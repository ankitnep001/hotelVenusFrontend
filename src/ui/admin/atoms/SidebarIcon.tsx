import { CiMail } from "react-icons/ci";
import { FaFile, FaFileAlt } from "react-icons/fa"; // Import icons from react-icons
import { IoMdHome } from "react-icons/io";
import { IoEarth, IoMailOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";


export const adminSidebarIcon: { [key: string]: JSX.Element } = {
    "Dashboard": <LuLayoutDashboard />,
    "Site Options": <IoMdHome />,
    "Posts": <FaFileAlt />,
    "Pages": <FaFile />,
    "Rooms": <MdOutlineBedroomParent />,
    "Services": <IoEarth />,
    "Inquiry": <CiMail />,
    "Settings": <IoMailOutline />
};