import React from 'react'
import Arrow from '@/components/Icon/Arrow'

interface JobCardProps{
    link: string;
    company: string;
    duration: string;
    post: string;
}


const JobCard:React.FunctionComponent<JobCardProps> = ({
    link,
    company,
    duration,
    post
}) => {
  return (
      <div className='flex justify-between items-center my-2 pl-6'>
          <div className=''>
              <h1 className="text-main pl-6 font-spaceFont text-2xl  relative before:content-['▹'] before:text-[#ffa51d] before:text-lg before:mt-2 before:absolute before:left-0 before:leading-3">{post} </h1>
              <div className='flex items-center '>
                  <h1 className='pl-6 text-text font-spaceFont text-base opacity-80'>{company} </h1>
                  <a href={link} target="_blank" rel="noreferrer" className='w-4 h-4 flex justify-center items-center ml-[2px] cursor-pointer animate-[all_1s_ease-in] transition-transform hover:translate-x-[2px]'>
                      <Arrow />
                  </a>
              </div>
          </div>
          <p className='font-spaceFont text-text text-base opacity-80'>{duration} </p>
      </div>
  )
}

export default JobCard