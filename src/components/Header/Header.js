import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <header className='flex justify-between items-center sticky z-10 top-0 p-6 bg-teal-700 md:flex-row flex-col-reverse text-white'>
                <nav className='text-lg font-bold'>
                    <Link to="/home" className='mr-8'>home</Link>
                    <Link to="/selectedmeals" className='mr-8'>selected meals</Link>
                    <Link to="/wishlist" className='mr-8'>wishlist</Link>
                    <Link to="/about" className='mr-8'>about</Link>
                </nav>
            </header>
    );
};

export default Header;