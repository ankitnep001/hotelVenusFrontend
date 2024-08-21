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

// import { FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

// interface SocialProps {
//     textColor: string
//     showBackground: string
//     showHover: string
// }

// const Social: React.FC<SocialProps> = ({ textColor = "[#ffeedc]", showBackground = true, showHover = true }) => {

//     const backgroundClass = showBackground ? "bg-[#6f4028]" : "";
//     const hoverClass = showHover ? "hover:bg-white" : "hover:bg-[#]"
//     return (
//         <div className="flex items justify-center gap-x-3 ">

//             <p className={`${backgroundClass} rounded-full p-2 hover:bg-white hover:text-black`}>
//                 <FaFacebookF className={`${textColor} hover:text-black`} />
//             </p>
//             <p className={`${backgroundClass} rounded-full p-2 hover:bg-white hover:text-black`}>
//                 <FaInstagram className={`${textColor} hover:text-black`} />
//             </p>
//             <p className={`${backgroundClass} rounded-full p-2 hover:bg-white hover:text-black`}>
//                 <FaTripadvisor className={`${textColor} hover:text-black`} />
//             </p>
//             <p className={`${backgroundClass} rounded-full p-2 hover:bg-white hover:text-black`}>
//                 <FaWhatsapp className={`${textColor} hover:text-black`} />
//             </p>
//         </div>
//     )
// }

// export default Social