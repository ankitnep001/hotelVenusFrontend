import Accomodation from "@ui/common/molecules/Accomodation"
import NavigationList from "@ui/common/molecules/NavigationList"

const MenuRight = () => {
    return (
        <div className="w-full flex flex-col justify-center gap-y-10 px-10 ">
            <div className="w-full flex flex-col md:flex-row gap-x-15">

                <Accomodation />

                <div className="flex-1">
                    <ul className="font-nanum flex flex-col gap-y-2 text-[28px]">
                        <li className="hover:underline">Places & Sights</li>
                        <li className="hover:underline">Eat & Drink</li>
                        <li className="hover:underline">Infinity Pool</li>
                        <li className="hover:underline">Conference</li>
                        <li className="hover:underline">Wellness</li>
                        <li className="hover:underline">Offers</li>
                    </ul>

                </div>
            </div>

            <hr className="w-[60%]" />
            <div className=" flex items-start">
                <NavigationList />
            </div>

        </div>
    )
}

export default MenuRight
