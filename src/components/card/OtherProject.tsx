import React,{useState} from 'react'
import { Folder } from 'lucide-react';
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { OtherProjectProps } from '../interface';
import { cn } from '@/util/helper';
const OtherProject = ({link,github,title,description,tech}: OtherProjectProps) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
            className={`flex w-full border border-gray-300 flex-col h-full  justify-between  p-4 rounded-lg cursor-pointer animate-[all_1s_ease-in] transition-transform hover:-translate-y-2`}>
            <header>
                <div className='flex justify-between items-center mb-4'>
                    <div className=" w-[40px] h-[40px] text-orange">
                        <Folder/>
                    </div>
                    <div className='flex items-center gap-4'>
                        <a className=" w-[25px] h-[25px] hover:text-orange" href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                            <Github/>
                        </a>
                        <a
                            className=" w-[25px] h-[25px] hover:text-orange"
                            href={link}
                            aria-label="External Link"
                            target="_blank"
                            rel="noreferrer">
                            <ExternalLink/>
                        </a>
                    </div>

                </div>
                <div className=''>
                    <h1 className={cn('text-lg md:text-xl font-bold mb-2  animate-[all_1s_ease-in]',isHover && "text-orange")}>{title}</h1>
                    <h1 className={`text-sm md:text-base opacity-80 text-lightText dark:text-text`}>{description}</h1>
                </div>

            </header>
            <footer className='mt-4'>
                {tech && (
                    <ul className={`flex gap-4 items-end text-lightText dark:text-text opacity-80 flex-grow flex-wrap list-none`}>
                        {tech.map((tech, i) => (
                            <li className='text-sm md:text-base' key={i}>{tech}</li>
                        ))}
                    </ul>
                )}
            </footer>

        </div>
    )
}

export default OtherProject