import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone, MdOutlineWhatsapp } from "react-icons/md";

const HotelInfo = () => {
    return (
        <div className="flex flex-col gap-y-1 font-poppins text-[17px] text-[#ffeedc]">
            <div className="mb-3">
                <h1 className="uppercase font-poppins text-[14px] tracking-widest ">kathmandu office</h1>
                <p className="flex items-center gap-x-2"><MdOutlineLocationOn /> Khadbari, Sankhuwasabha, Nepal</p>
                <p className="flex items-center gap-x-2">
                    <MdOutlinePhone />
                    <span className="hover:underline cursor-pointer">+977 1 4650251</span>
                    /
                    <span className="hover:underline cursor-pointer">+977 1 4650351</span>
                </p>
                <p className="flex items-center gap-x-2">
                    <MdOutlineWhatsapp />
                    +977 9808209299
                </p>
            </div>

            <div className="mb-3">
                <p className="uppercase font-poppins text-[14px] tracking-widest ">For general enquiries please contact:</p>
                <p className="flex items-center gap-x-2 hover:underline cursor-pointer">
                    <MdOutlineMail />
                    info@venushotel.com
                </p>
            </div>

            <div className="mb-3">
                <p className="uppercase font-poppins text-[14px] tracking-widest ">For corporate or group please contact:</p>
                <p className="flex items-center gap-x-2 hover:underline cursor-pointer">
                    <MdOutlineMail />
                    sales@venushotel.com
                </p>
            </div>
        </div>
    )
}

export default HotelInfo
