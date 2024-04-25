import React from 'react'
import Section from '../layout/section'
const Header = () => {
    return (
        <div className='flex items-center gap-8 mt-32 '>
            <div className="w-24 h-24 ">
                <img className="w-full h-full rounded-full object-cover" src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <div>
                <h1 className='text-3xl text-main font-semibold font-inter'>Hii! 👋 I am Sanil</h1>
                <h1 className='font-medium text-xl font-inter text-text'>Frontend Software Engineer</h1>
            </div>
        </div>
    )
}

export default Header