"use client";
import {useState} from "react";
import Image from "next/image";

interface NavItemProps {
    label: string;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

function NavItem({label, index, activeIndex, setActiveIndex}: NavItemProps) {
    const isActive = activeIndex === index;
    return (
        <li
            onClick={() => setActiveIndex(index)}
            className="relative cursor-pointer py-2 group list-none">
            <span
                className={`font-poppins text-sm transition-all duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                {label}
            </span>
            {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00A3FF]"></div> // Chiziq pastda chiroyli turishi uchun absolute qilindi
            )}
        </li>
    );
}

export default function HeaderItem() {
    const [activeIndex, setActiveIndex] = useState(1);
    const menuItems = ["Asosiy", "Yangiliklar", "Kurslar", "Kutubxona", "Bog'lanish"];
    return (
        <header className="w-[1473px] h-[76px] bg-[#1A1D1F] rounded-2xl flex items-center justify-between ml-[34px]">
            <div className="flex items-center my-[26px] ml-[24px]">
                <Image
                    src="/icon.svg"
                    alt="bu shaxmat iconi rasmi"
                    width={104}
                    height={28}
                    className="w-[103.61px] h-[28px] mb-[4px]"/>
                <div className="h-[24px] w-px bg-gray-500 mx-4"></div>
                <div className="flex items-center w-[112px] h-[24px] gap-2 cursor-pointer">
                    <span className="text-white text-sm font-medium font-poppins">O'zbekcha</span>
                    <Image src="/icon2.svg" alt="bu select iconni" width={16} height={16}/>
                </div>
            </div>
            <nav>
                <ul className="flex items-center gap-10 m-0 p-0">
                    {menuItems.map((item, index) => (
                        <NavItem
                            key={index}
                            label={item}
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </ul>
            </nav>
            <div className="w-[293px] h-[40px] flex items-center gap-6">
                <div className="w-[120px] h-[24px] flex gap-6 items-center">
                    <Image src="/search.svg" alt="search icon" width={24} height={24} className="w-[24px] h-[24px]"/>
                    <Image src="/savat.svg" alt="cart icon" width={24} height={24} className="w-[24px] h-[24px]"/>
                    <Image src="/notification.svg" alt="notification icon" width={24} height={24}
                           className="w-[24px] h-[24px]"/>
                </div>
                <div className="h-[24px] w-px bg-gray-200"></div>
                <button
                    className="text-white flex justify-center items-center bg-[#1C92E0] w-[132px] h-10 gap-[10px] rounded-[8px] mr-5 cursor-pointer hover:bg-[#1572b0] transition-colors">
                    Kirish
                    <Image src="/log-in.svg" alt="login icon" width={20} height={20} className="w-5 h-5"/>
                </button>
            </div>
        </header>
    );
}