import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className='flex items-center gap-8 pt-28 '>
            <motion.div
                className="profile-icon-wrapper cursor-pointer w-fit h-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                <div className="w-32 h-32 overflow-hidden rounded-full">
                    <img className="w-[200%]  transition-all grayscale-0 hover:grayscale h-[100%] rounded-full object-cover" src='/pic2.jpeg' />
                </div>
            </motion.div>
            <div>
                <h1 className='text-xl sm:text-3xl dark:text-main cursor-pointer  text-lightMain font-semibold font-poppin'>👋 Hi, I am Sanil</h1>
                <motion.div
                    whileHover={{ color: "orange" }}
                    onMouseEnter={() => {
                        const elem = document.getElementById("heading-post-animation");
                        if (elem)
                            elem.style.width = "100%"
                    }}
                    onMouseLeave={() => {
                        const elem = document.getElementById("heading-post-animation");
                        if (elem)
                            elem.style.width = "0%"
                    }}
                    style={{
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <motion.span
                        id='heading-post-animation'
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: 0,
                            zIndex: 20,
                            height: "2px",
                            background: "orange",
                            transition: "all",
                            transitionDuration: "0.3s"
                        }}
                    />
                    <h1 className='hover:dark:text-orange hover:text-orange cursor-pointer font-medium text-base sm:text-xl font-poppin text-lightText dark:text-text'>Frontend Software Engineer</h1>
                </motion.div>
            </div>
        </div>
    )
}


export default Header