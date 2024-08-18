import Logo from "@ui/common/molecules/Logo";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./sidebar/Menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Add or remove overflow-hidden from body when menu toggles
        if (!isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    return (
        <nav className="h-[90px] px-14 flex justify-between items-center z-100">
            <Logo />
            <div className="flex items-center gap-x-8">
                <button
                    className="hidden md:flex border-2 border-[#ffeedc] rounded-sm py-2 px-4 hover:bg-[#ffeedc] cursor-pointer">
                    Book Now
                </button>

                <button onClick={toggleMenu} className="cursor-pointer">
                    {isMenuOpen ? null : <AiOutlineMenu size={18} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 flex flex-col items-center bg-split-gradient z-10 overflow-y-auto">
                    <Menu onClose={toggleMenu} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
