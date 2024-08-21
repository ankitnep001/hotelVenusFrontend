
// const Blogs = () => {
//     return (
//         <div className="bg-[#f6e6d6] py-10 flex justify-center">
//             <h1 className="text-[66px] font-nanum text-[#5b3423] ">Blogs</h1>
//         </div>
//     )
// }

// export default Blogs

import { blogs } from '@data/blog';
import { IBlog } from '@interface/blog.interface';

const suffleBlog = (array: IBlog[]): IBlog[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Blogs = () => {
    // const [liked, setLiked] = useState(false);

    const randomBlogs = suffleBlog([...blogs]).slice(0, 3);

    // const handleLikeClick = () => {
    //     setLiked(!liked)
    // }

    return (
        <div className="bg-[#f6e6d6] py-10 flex flex-col justify-center items-center">
            <h1 className="text-[66px] font-nanum text-[#5b3423] ">Blogs</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 px-20">
                {randomBlogs.map((blogs, index) => (
                    <div className='group bg-[#ffeedc] flex flex-col  ' key={index}>
                        <div className="  flex justify-center items-center ">
                            <img src={blogs.image} alt="" className="group-hover:opacity-90 object-contain " />
                        </div>

                        <div className=" flex flex-col justify-start gap-y-4  px-5 py-5 max-w-[370px]">
                            <p className="text-xs font-nanum text-[#a3a3a3] ">{blogs.date}</p>
                            <h1 className="group-hover:cursor-pointer text-[17px] font-semibold font-nanum  text-[#5b3423] py-2 tracking-wider ">{blogs?.title}</h1>
                            <p className="text-base font-poppins  text-black text-[14px] mb-5">{blogs?.summary}</p>

                            <button
                                className="uppercase font-poppins tracking-widest border-2 border-[#5b3423] text-[12px] text-[#5b3423] px-2 py-1 
                            hover:bg-[#5b3423] hover:text-[#ffeedc] max-w-[123px] ">
                                Read More
                            </button>

                        </div>
                    </div>

                ))}
            </div>
            <button
                className="uppercase font-poppins tracking-widest  text-[12px] text-[#ffeedc] px-3 py-3 
                            bg-[#5b3423] hover:bg-[#713f25] mt-10  ">
                View All
            </button>        </div>
    )
}

export default Blogs

