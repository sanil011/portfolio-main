'use client'
import React, { useState, useEffect } from 'react'
import { cn } from '@/util/helper'
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { ProjectProps } from '../interface';

const Project: React.FunctionComponent<ProjectProps> = ({
    id,
    pic,
    name,
    techStack,
    githubLink,
    hostedLink,
    about
}) => {
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        console.log(isHover)
    },[isHover])
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={cn('flex cursor-pointer md:relative border border-gray-300 dark:border-opacity-55 overflow-hidden rounded-md flex-col min-h-72 lg:min-h-64 mb-24', id == "2" && "md:flex-row-reverse", id == '3' && "mb-0")}>

            <div className={cn('w-full md:w-8/12 relative lg:w-7/12  backdrop transition-opacity overflow-hidden h-full max-h-60 md:max-h-[100%] duration-300')}>
                <img src={pic} className={cn("w-full h-[100%] object-cover")} />
                <div className={cn('bg-black w-full h-full absolute top-0 opacity-20 dark:opacity-60 left-0', isHover && "opacity-0 dark:opacity-20")}></div>
            </div>

            <div className={cn('w-full md:w-6/12 md:absolute md:top-0 md:right-0 md:z-0 h-full flex flex-col gap-4 md:gap-0 justify-between md:items-end', id == '2' && 'left-0 md:items-start')}>
                <h2 className={cn('text-lightMain dark:text-main py-4 px-2 md:px-4 font-semibold leading-snug text-xl transition-colors animate-[all_1s_ease-in]', isHover && 'dark:text-orange text-orange')}>{name}</h2>
                <h4 className={cn('text-lightText dark:text-text  text-sm lg:text-base bg-gray-100 dark:bg-background rounded-[4px] p-3')}>
                    {about}
                </h4>

                <ul className={cn('flex gap-4 leading-7', id == '2' ? 'pl-4' : 'pl-4 md:pr-4')}>
                    {techStack.map((tech, index) => {
                        return (
                            <li key={index} className='lg:text-lg md:text-base text-sm text-lightText dark:text-text'>{tech}</li>
                        )
                    })}
                </ul>

                {/* Icon external links */}
                <div className={cn('flex gap-6 pb-4', id == '2' ? 'pl-4' : 'pl-4 md:pr-4')}>
                    <a
                        className=" w-[25px] dark:text-main text-lightMain h-[25px] cursor-pointer hover:text-orange"
                        href={githubLink}
                        aria-label="External Link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github />
                    </a>
                    <a
                        className=" w-[25px] dark:text-main text-lightMain h-[25px] cursor-pointer hover:text-orange"
                        href={hostedLink}
                        aria-label="External Link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ExternalLink />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Project