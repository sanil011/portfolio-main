import React from 'react'
import Section from '../layout/section'
import { motion } from 'framer-motion';


const Header = () => {
  
    return (
        <div className='flex items-center gap-8 pt-28 '>
            <motion.div
                className="profile-icon-wrapper cursor-pointer w-fit h-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                <div className="w-32 h-32 ">
                    <img className="w-full  transition-all hover:grayscale-0 grayscale h-full rounded-full object-cover" src='/profile.jpeg' />
                </div>
            </motion.div>
            <div>
                <h1 className='text-xl sm:text-3xl dark:text-main  text-black font-semibold font-poppin'>👋 Hi, I am Sanil</h1>
                <h1 className='font-medium text-base sm:text-xl font-poppin text-lightText dark:text-text'>Frontend Software Engineer</h1>
            </div>
        </div>
    )
}


export default Header