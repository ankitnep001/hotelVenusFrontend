import { FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

const FooterSocial = () => {
    return (
        <div className="flex items justify-start gap-x-3 mt-1 ">

            <p className="" >
                <FaFacebookF className=" text-[#6f4028] hover:text-black" />
            </p>
            <p >
                <FaInstagram className=" text-[#6f4028] hover:text-black" />
            </p>
            <p >
                <FaTripadvisor className=" text-[#6f4028] hover:text-black" />
            </p>
            <p >
                <FaWhatsapp className=" text-[#6f4028] hover:text-black" />
            </p>
        </div>
    )
}

export default FooterSocial