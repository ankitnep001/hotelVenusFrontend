import Logo from "@ui/common/molecules/Logo";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./sidebar/Menu";

const RoomNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };
    return (
        <nav className="absolute top-0 left-0 w-full h-[90px] px-14 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
            <Logo />
            <div className="flex items-center gap-x-8">
                <button
                    className="hidden md:flex border-2 border-[#ffeedc] text-[#ffeedc] rounded-sm py-2 px-4 hover:bg-[#ffeedc] hover:text-black cursor-pointer">
                    Book Now
                </button>

                <button onClick={toggleMenu} className="text-[#ffeedc] cursor-pointer">
                    {isMenuOpen ? null : <AiOutlineMenu size={18} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 flex flex-col items-center bg-split-gradient z-10 overflow-y-auto">
                    <Menu onClose={toggleMenu} />
                </div>
            )}
        </nav>
    )
}

export default RoomNavbar
