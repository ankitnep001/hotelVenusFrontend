import InputField from "@ui/common/atoms/InputField";
import Label from "@ui/common/atoms/Label";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const SiteSocialMedia = () => {
    return (
        <div className="w-80">
            <div className="relative mb-2">

                <Label textSize="text-sm" fontSize="font-normal" textColor="text-black" name={"facebook"} label={"Facebook URL"} />
                <FaFacebookF className='absolute left-3 top-[40px] text-black ' />
                <InputField name={"facebook"} type={"text"} />
            </div>
            <hr className="mb-2" />

            <div className="relative mb-2">
                <Label textSize="text-sm" fontSize="font-normal" textColor="text-black" name={"instagram"} label={"Instagram URL"} />
                <FaInstagram className='absolute left-3 top-[40px] text-black' />
                <InputField name={"Instagram"} type={"text"} />
            </div>

            <hr className="mb-2" />
            <div className=" relative mb-2">
                <Label textSize="text-sm" fontSize="font-normal" textColor="text-black" name={"linkedin"} label={"Linkedin URL"} />
                <FaLinkedin className='absolute left-3 top-[40px] text-black' />
                <InputField name={"linkedin"} type={"text"} />
            </div>
            <hr className="mb-2" />
            <div className=" relative mb-2">
                <Label textSize="text-sm" fontSize="font-normal" textColor="text-black" name={"youtube"} label={"Youtube URL"} />
                <FaYoutube className='absolute left-3 top-[40px] text-black' />
                <InputField name={"youtube"} type={"text"} />
            </div>
            <hr className="mb-2" />
            <div className=" relative mb-2">
                <Label textSize="text-sm" fontSize="font-normal" textColor="text-black" name={"twitter"} label={"Twitter URL"} />
                <FaTwitter className='absolute left-3 top-[40px] text-black' />
                <InputField name={"twitter"} type={"text"} />
            </div>

        </div>
    )
}

export default SiteSocialMedia
