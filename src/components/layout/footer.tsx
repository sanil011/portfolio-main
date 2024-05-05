import React from 'react'
import ViewContainer from './viewContainer'
import { Mail } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

const Footer = () => {
    const icons = [
        { icon: <Github />, link: "https://github.com/sanil011" },
        { icon: <Linkedin />, link: "https://www.linkedin.com/in/sanil-pal-48370b223/" },
        { icon: <Twitter />, link: "https://twitter.com/Sanil011" },
        { icon: <Mail />, link: "mailto:sanilp191@gmail.com" }
    ]

  return (
      <footer className='pb-12'>
          <ViewContainer className='flex gap-4 sm:flex-row flex-col items-center w-10/12 mx-auto max-w-[1280px] justify-between'>
              <h1 className='font-poppin text-lg md:text-2xl'>Developed By Sanil</h1>
              <div className='flex items-center gap-4'>
                  {icons?.map((icon) => (
                      <a
                          href={icon.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='hover:text-orange animate-[all_1s_ease-in] active:scale-125 transition-transform hover:-translate-y-2 hover:scale-110'
                      >
                          {icon.icon}
                      </a>
                 ))}
              </div>
          </ViewContainer>
   </footer>
  )
}

export default Footer