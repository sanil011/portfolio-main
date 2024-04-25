import React from 'react'
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
    return (
        <div className={cn('flex relative flex-row min-h-64 mb-24',id=="2" && "flex-row-reverse",id=='3' &&"mb-0")}>

            <div className='w-7/12'>
                <img src={pic} className={cn("", 'left-0')} />
            </div>

            <div className={cn('w-6/12 absolute top-0 right-0 z-0 h-full flex flex-col justify-between items-end',id=='2'&& 'left-0 items-start')}>
                <h2 className={cn('text-main font-semibold leading-snug text-xl')}>{name}</h2>
                <h4 className={cn('text-text bg-background p-4 rounded-[4px]', '')}>
                    {about}
                </h4>

                <ul className={cn('flex gap-4 leading-7')}>
                    {techStack.map((tech, index) => {
                        return (
                            <li key={index} className='text-lg text-text'>{tech}</li>
                        )
                    })}
                </ul>

                {/* Icon external links */}

                <div className='flex gap-6'>
                    <a
                        className=" w-[25px] h-[25px] cursor-pointer hover:text-orange"
                        href={githubLink}
                        aria-label="External Link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github />
                    </a>
                    <a
                        className=" w-[25px] h-[25px] cursor-pointer hover:text-orange"
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