import { image } from "@config/constant/image"
import Accomodation from "@ui/common/molecules/Accomodation"
import Logo from "@ui/common/molecules/Logo"
import FooterNavList from "../molecules/FooterNavList"

const Footer = () => {
    return (
        <div className=" bg-[#ffeedc] flex flex-col md:flex-row w-full justify-between items-center h-fit">
            <div className="text-[#543421] flex-1 flex flex-col px-20 items-center ">
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex-1">
                        <Accomodation />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <FooterNavList />
                    </div>
                </div>

                <hr className=" border-[#5b3423] w-full" />
                <div className="flex">
                    <Logo />

                </div>
            </div>

            <div className="flex-1 flex justify-end">
                <img src={image.footerImage} className="h-[700px]" />
            </div>
        </div>
    )
}

export default Footer
