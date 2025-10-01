import Image from "next/image";

const HeaderSection = ({
    title,
    subtitle
}: {
    title?: string;
    subtitle?: string;
}) => {
    return (
        <header className="relative h-60 text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/hero.jpg" alt="Header Image" fill className="object-cover object-center w-full h-full brightness-50" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
                    <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
                    <p className="text-xl text-gray-300">{subtitle}</p>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection