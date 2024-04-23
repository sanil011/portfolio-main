import React, { HTMLAttributes } from 'react'
import { getPathMap } from '@/util/pathMap';
import Link from 'next/link';
import { cn } from '@/util/helper';
import { useRouter } from 'next/router';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface PathMapProps {
    title: string;
    link?: string;
    isAvailable?: boolean
}
const Navbar: React.FunctionComponent = () => {
    const router = useRouter();
    let pathName = router?.pathname;
    const { setTheme, theme } = useTheme()
    console.log(theme)
    return (
        <nav className='navbar | mt-6'>
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
            <div>
                {theme == 'dark' && <Sun onClick={() => setTheme('light')} />}
                {theme == 'light' && <Moon onClick={() => setTheme('dark')} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
            </div>
        </nav>
    )
}

export default Navbar;
export type { PathMapProps };