
const Accomodation = () => {
    return (
        <div className="flex flex-1 flex-col gap-y-4">
            <p className="uppercase text-[14px] tracking-wider font-poppins hover:underline">Accomodation</p>

            <ul className="font-nanum text-[28px] flex flex-col gap-y-2 ">
                <li className="hover:underline cursor-pointer">Delux Room</li>
                <li className="hover:underline cursor-pointer">Executive Room</li>
                <li className="hover:underline cursor-pointer">Songstan Gampo Suite</li>
                <li className="hover:underline cursor-pointer">Bhrikuti Newari Suite</li>
                <li className="hover:underline cursor-pointer">Wencheng Suite</li>
            </ul>
        </div>
    )
}

export default Accomodation
