import InputField from "@ui/common/atoms/InputField";
import Label from "@ui/common/atoms/Label";
import { FaRegAddressBook, FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadOutline, IoPhonePortraitOutline } from "react-icons/io5";

const SiteInfoSection = () => {
    return (
        <div>
            <div className="relative mb-2">
                <Label textColor="text-black" name={"email"} label={"Email"} />
                <IoMailUnreadOutline className='absolute left-3 top-[45px] text-black ' />
                <InputField name={"email"} type={"email"} />
            </div>

            <hr className="mb-2" />

            <div className="relative mb-2">
                <Label textColor="text-black" name={"phoneNumber"} label={"Phone Number"} />
                <IoPhonePortraitOutline className='absolute left-3 top-[45px] text-black' />
                <InputField name={"phoneNumber"} type={"tel"} />
            </div>

            <hr className="mb-2" />

            <div className="relative mb-2">
                <Label textColor="text-black" name={"whatsapp"} label={"Whatsapp Number"} />
                <FaWhatsapp className='absolute left-3 top-[45px] text-black' />
                <InputField name={"phoneNumber"} type={"tel"} />
            </div>

            <hr className="mb-2" />


            <div className=" relative mb-2">
                <Label textColor="text-black" name={"address"} label={"Address"} />
                <FaRegAddressBook className='absolute left-3 top-[45px] text-black' />
                <InputField name={"address"} type={"text"} />
            </div>

        </div>
    )
}

export default SiteInfoSection
