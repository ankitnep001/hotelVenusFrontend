
const NavigationList = () => {
    return (
        <div>
            <ul className="grid grid-cols-3 gap-x-5 gap-y-3 font-poppins text-[14px] ">
                <li className="hover:underline cursor-pointer uppercase">Home</li>
                <li className="hover:underline cursor-pointer uppercase">About</li>
                <li className="hover:underline cursor-pointer uppercase">Blogs</li>
                <li className="hover:underline cursor-pointer uppercase">Media Gallery</li>
                <li className="hover:underline cursor-pointer uppercase">Careers</li>
                <li className="hover:underline cursor-pointer uppercase">Sustainability</li>
                <li className="hover:underline cursor-pointer uppercase">Reviews</li>
                <li className="hover:underline cursor-pointer uppercase">Contact</li>
                <li className="hover:underline cursor-pointer uppercase">Policies</li>
            </ul>
        </div>
    )
}

export default NavigationList
