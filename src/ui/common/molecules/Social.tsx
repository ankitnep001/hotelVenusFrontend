import { FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

const Social = () => {
    return (
        <div className="flex items justify-center gap-x-3 ">

            <p className="bg-[#6f4028] rounded-full p-2 hover:bg-white hover:text-black " >
                <FaFacebookF className="text-[#ffeedc] hover:text-black" />
            </p>
            <p className="bg-[#6f4028] rounded-full p-2 hover:bg-white hover:text-black " >
                <FaInstagram className="text-[#ffeedc] hover:text-black" />
            </p>
            <p className="bg-[#6f4028] rounded-full p-2 hover:bg-white hover:text-black " >
                <FaTripadvisor className="text-[#ffeedc] hover:text-black" />
            </p>
            <p className="bg-[#6f4028] rounded-full p-2 hover:bg-white hover:text-black " >
                <FaWhatsapp className="text-[#ffeedc] hover:text-black" />
            </p>
        </div>
    )
}

export default Social
