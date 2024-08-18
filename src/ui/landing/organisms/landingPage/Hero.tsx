import { image } from "@config/constant/image"

const Hero = () => {
    return (
        <div className="bg-[#f0e0cf]">
            <img
                src={image.heroimg}
                alt="Hero in Navbar"
                className="relative w-full h-[700px]   object-cover "
            />
        </div>
    )
}

export default Hero
