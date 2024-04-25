'use client'
import React, { HTMLAttributes } from 'react'
import { getPathMap } from '@/util/pathMap';
import Link from 'next/link';
import { cn } from '@/util/helper';
import { useRouter } from 'next/router';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import ViewContainer from './viewContainer';


interface PathMapProps {
    title: string;
    link?: string;
    isAvailable?: boolean
}


const Navbar: React.FunctionComponent = () => {
    const router = useRouter();
    let pathName = router?.pathname;
    const { setTheme, theme } = useTheme()

    return (
        <nav className='navbar | mt-6'>
            <ViewContainer className='flex items-center min-w-[1280px] max-w-[1280px] justify-between'>
                <h1>Sanil</h1>
                <div className='flex items-center gap-2'>
                    <ul className='navbar-option-list | flex flex-row items-center justify-end gap-2'>
                        {getPathMap()?.map((item: PathMapProps, index: number) => (
                            <li key={index}>
                                {item?.link &&
                                    <Link
                                        className={cn('navbar-option-item list-none text-base ',
                                            pathName == 'item.link' && 'underline underline-offset-1')}
                                        href={item?.link}
                                    >
                                        {item?.title}
                                    </Link>}
                            </li>
                        ))}
                    </ul>
                    {/* {theme == 'light' && <button className='p-3 rounded-sm hover:bg-gray-100'>
                        <Sun className='cursor-pointer' size={22} onClick={() => setTheme('dark')} />
                    </button>}
                    {theme == 'dark' && <button className='p-3 rounded-sm hover:bg-gray-100'>
                        <Moon className='cursor-pointer' size={22} onClick={() => setTheme('light')} />
                    </button>} */}
                </div>
            </ViewContainer>
        </nav>
    )
}

// 1a1a1e


export default Navbar;
export type { PathMapProps };