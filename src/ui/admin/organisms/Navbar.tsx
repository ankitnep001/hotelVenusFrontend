import { adminImage } from "@config/constant/adminImage";
import { timeAgo } from "@utils/timeAgo";
import { IoEarth } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const adminName = localStorage.getItem('HotelVenusName');
const lastLogin = localStorage.getItem('HotelVenusLastLogin');

const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
};



const Navbar = () => {
    return (
        <nav className="bg-[#019cec] w-full py-1 flex h-20 gap-x-5 pl-5">
            <div className="flex justify-center items-center gap-x-5 ">
                <p className="font-poppins text-white font-medium text-2xl">Admin Panel</p>
                <TiThMenu color="white" size={25} />
            </div>
            <div className="bg-[#ffffff] px-8 flex-1 flex justify-between items-center w-full  ">
                <div className="flex justify-center items-center gap-x-2 ">
                    <img src={adminImage?.adminProfile} alt="" className="h-8" />
                    <p className="font-poppins text-[1rem] ">Welcome, {adminName && capitalizeWords(adminName)}</p>
                    <p className="font-poppins text-xs">Last login: {timeAgo(lastLogin)}</p>
                </div>

                <div className="flex gap-x-3">
                    <p className="bg-[#ffffff] p-2 border-2 border-[#e4e4f4] shadow-xl rounded-md "><IoEarth className="text-gray-500" /></p>
                    <p className="bg-[#ffffff] p-2 border-2 border-[#e4e4f4] shadow-xl rounded-md "><IoEarth className="text-gray-500" /></p>
                    <p className="bg-[#ffffff] p-2 border-2 border-[#e4e4f4] shadow-xl rounded-md "><IoEarth className="text-gray-500" /></p>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
