import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    const currentPage = ({ isActive }) => {
        return isActive
            ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    }
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 md:px-8'>
                <div className='flex h-20 items-center justify-center'>
                    <div className='flex flex-shrink-0 items-center mr-4 md:mr-auto'>
                        <img className='h-10 w-auto' src={logo} alt='React Jobs' />
                        <span className='hidden md:block text-white text-2xl font-bold ml-3'>
                            React Jobs
                        </span>
                    </div>
                    <div>
                        <div className='flex space-x-2'>
                            <NavLink to='/' className={currentPage}>
                                Home
                            </NavLink>
                            <NavLink to='/jobs' className={currentPage}>
                                Jobs
                            </NavLink>
                            <NavLink to='/add-job' className={currentPage}>
                                Add Job
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar