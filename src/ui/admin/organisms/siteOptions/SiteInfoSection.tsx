import InputField from "@ui/common/atoms/InputField";
import Label from "@ui/common/atoms/Label";
import { FaRegAddressBook } from "react-icons/fa";
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
                <Label textColor="text-black" name={"phoneNumner"} label={"Phone number"} />
                <IoPhonePortraitOutline className='absolute left-3 top-[45px] text-black' />
                <InputField name={"phoneNumber"} type={"number"} />
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
