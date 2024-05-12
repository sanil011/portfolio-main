import React from 'react'
import Section from '../layout/section'
import experience from '@/util/experience'
import JobCard from '../card/JobCard'


const ExperienceSection = () => {
    const jobs = [{ company: "UnstudioAi", duration: "Aug,2023 - current", post: "Software Developer Intern", link: "https://www.linkedin.com/company/unstudioai/" },
    { company: "ZeviAi", duration: "May,2023 - June,2023", post: "Frontend Engineering Intern", link: "https://www.linkedin.com/company/zevi-ai/" },
    { company: "Oyesters", duration: "Nov,2022 - Jan,2023", post: "Frontend Intern", link: "https://www.linkedin.com/company/oyesters/" },];
    return (
        <Section>
            <h1 className='text-lightMain dark:text-main font-semibold leading-snug text-xl sm:text-3xl'>Where i&apos;ve worked.</h1>
            {jobs && jobs.map((job, index) => {
                return (
                    <JobCard key={index} {...job} />
                )
            })}
        </Section>
    )
}


export default ExperienceSection