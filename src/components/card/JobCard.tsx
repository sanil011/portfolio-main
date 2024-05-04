import React from 'react'
import Arrow from '@/components/Icon/Arrow'
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
interface JobCardProps {
    link: string;
    company: string;
    duration: string;
    post: string;
}


const JobCard: React.FunctionComponent<JobCardProps> = ({
    link,
    company,
    duration,
    post
}) => {
    return (
        <div className='flex justify-between items-center my-2 pl-2 sm:pl-6'>
            <div className='w-full'>

                <h1 className="text-lightText dark:text-main pl-3 sm:pl-6 font-spaceFont text-base sm:text-xl  
              relative before:content-['▹'] before:text-[#ffa51d] before:text-lg
              before:mt-2 before:absolute before:left-0 before:leading-3">{post} </h1>

                <div className='flex items-center justify-between w-full'>

                    <Link href={link} target="_blank" rel="noreferrer"
                        className='flex items-center text-lightText dark:text-text'
                        >
                            <h1 className='pl-6 flex items-center font-spaceFont text-sm sm:text-base opacity-80'>{company}</h1>
                            <div className='w-3 h-3 sm:w-4 sm:h-4 flex justify-center items-center ml-[2px] cursor-pointer animate-[all_1s_ease-in] transition-transform hover:translate-x-[2px]'>
                            <ArrowUpRight size={15} />
                        </div>
                    </Link>


                    <p className='font-spaceFont text-lightText dark:text-text text-sm sm:text-base opacity-80'>{duration} </p>
                </div>

            </div>
        </div>
    )
}

export default JobCard