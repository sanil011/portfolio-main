'use client'
import React,{useState,useEffect} from 'react'
import { getPathMap } from '@/util/pathMap';
import Link from 'next/link';
import { cn } from '@/util/helper';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import ViewContainer from './viewContainer';
import { color, motion } from "framer-motion";
// @ts-ignore 
import useSound from 'use-sound';



interface PathMapProps {
    title: string;
    link?: string;
    isAvailable?: boolean
}


const Navbar: React.FunctionComponent = () => {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [play] = useSound("/click.mp3");
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null;

    return (
        <nav className='navbar | pt-6'>
            <ViewContainer className='flex items-center w-10/12 mx-auto max-w-[1280px] justify-end'>
                <div className='flex items-center gap-2'>
                    <ul className='navbar-option-list | flex flex-row items-center  justify-end gap-4'>
                        {getPathMap()?.map((item: PathMapProps, index: number) => (
                            <li key={index}>
                                {item?.link &&
                                   
                                    <motion.p
                                        whileHover={{color:"orange"}}
                                            onMouseEnter={() => {
                                                const elem = document.getElementById(`"border-animation"+${index}`);
                                                if(elem)
                                                elem.style.width = "100%"
                                            }}
                                            onMouseLeave={() => {
                                                const elem = document.getElementById(`"border-animation"+${index}`);
                                                if(elem)
                                                elem.style.width = "0%"
                                            }}
                                            style={{
                                                position: "relative",
                                                overflow: "hidden",
                                            }}
                                    >
                                        <Link
                                            className={cn('navbar-option-item list-none text-base text-lightMain  dark:text-main hover:dark:text-orange hover:text-orange')}
                                            href={item?.link}
                                            target={item.title == "Resume" ? "_blank":""}
                                            rel={item.title == "Resume" ? "noopener noreferrer":""}
                                        >
                                            <motion.span
                                                id={`"border-animation"+${index}`}
                                                style={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: 0,
                                                    width: 0,
                                                    zIndex:20,
                                                    height: "2px",
                                                    background: "orange",
                                                    transition: "all",
                                                    transitionDuration:"0.3s"
                                                }}

                                            />
                                        {item?.title}
                                    </Link>
                                        </motion.p>
                                    }
                            </li>
                        ))}
                    </ul>
                    {theme == 'light' &&
                        <div className='hover:bg-gray-100 w-11 h-10 flex justify-center cursor-pointer items-center rounded-md'>

                                <Sun size={20} onClick={() => { setTheme('dark'); play()}} />

                        </div>
                    }
                    {theme == 'dark' &&
                        <div className='hover:bg-[#272728] w-11 h-10 flex justify-center cursor-pointer items-center rounded-md'>

                            <Moon size={20} color='#c1c2c6' onClick={() => { setTheme('light'); play()}} />

                        </div>
                    }
                </div>
            </ViewContainer>
        </nav>
    )
}


export default Navbar;
export type { PathMapProps };