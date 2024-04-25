import React from 'react'
import Section from '../layout/section'
import { cn } from '@/util/helper'
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { mainProject } from '@/util/project';
import ProjectCard from '../card/Project';
const Project = () => {
  
    return (
        <Section>
            <h1 className='text-main font-semibold leading-snug text-3xl mb-12'>Some Things I’ve Built.</h1>
            {mainProject().map((item) => {
                return (
                    <ProjectCard key={item.id} {...item} />
                )
            })}
        </Section>
    )
}

export default Project