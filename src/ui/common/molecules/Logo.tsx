import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to='/home' >
            <div className="flex items-center gap-x-5 text-[#5b3423]">
                <div className="">
                    <h1 className="font-nanum text-6xl itallic">V</h1>
                </div>
                <div className="font-poppins">
                    <p className="uppercase tracking-widest">hotel</p>
                    <p className="uppercase text-3xl tracking-widest">venus</p>
                    <hr />
                    <p className="tracking-widest">Khadbari</p>
                </div>
            </div>
            {/* <div className="h-2">
                <img src={image.logo} alt="" />
            </div> */}
        </Link>

    )
}

export default Logo