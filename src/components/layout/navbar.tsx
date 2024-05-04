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
        <nav className='navbar | pt-6 dark:bg-[#1a1a1e]'>
            <ViewContainer className='flex items-center w-10/12 mx-auto max-w-[1280px] justify-end'>
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
                    {theme == 'light' &&
                        <div className='hover:bg-gray-100'>
                            <button className='p-3 rounded-sm '>
                                <Sun className='cursor-pointer' size={20} onClick={() => setTheme('dark')} />
                            </button>
                        </div>
                    }
                    {theme == 'dark' &&
                        <div className='hover:bg-gray-600 w-4'>
                            <button className=' rounded-sm '>
                                <Moon className='cursor-pointer' size={20} onClick={() => setTheme('light')} />
                            </button>
                        </div>
                    }
                </div>
            </ViewContainer>
        </nav>
    )
}

// 1a1a1e


export default Navbar;
export type { PathMapProps };