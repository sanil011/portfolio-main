import React from 'react'
import Section from '../layout/section'
import { cn } from '@/util/helper'
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { mainProject, otherProjects } from '@/util/project';
import ProjectCard from '../card/Project';
import OtherProjectCard from '../card/OtherProject';
const Project = () => {

    return (
        <Section id="project">
            <h1 className='text-lightText dark:text-main font-semibold leading-snug text-xl sm:text-3xl mb-12'>Some Things I’ve Built.</h1>
            {mainProject().map((item) => {
                return (
                    <ProjectCard key={item.id} {...item} />
                )
            })}

            
            <Section className='mt-12'>
                <h1 className='text-lightText dark:text-main text-center font-poppin font-semibold leading-snug text-3xl mb-12'>Other Noteworthy Projects.</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {otherProjects().map((item) => (
                        <OtherProjectCard key={item.id} {...item} />
                    ))}
                </div>
            </Section>
        </Section>
    )
}

export default Project