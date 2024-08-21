interface HeadingProps {
    headingText: string
}
const Heading: React.FC<HeadingProps> = ({ headingText }) => {
    return (
        <h1 className="font-nanum text-[52px] md:text-[100px] text-[#5b343] ">
            {headingText}
        </h1>
    )
}

export default Heading
