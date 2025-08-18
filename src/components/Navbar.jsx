import { useState } from 'react';
import { NavLink } from 'react-router';
import Button from './Button';
import Container from './Container';
import Flex from './Flex';
import { AiOutlineBars } from "react-icons/ai";


const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)

    }
    return (
        <>
            <nav className='font-poppins lg:flex relative'>
                <Container>
                    <Flex className='flex justify-between items-center py-6'>
                        <div className='w-[35%] pl-3.5'>
                            <h2 className='font-bold lg:text-3xl text-xl border-l-4 border-b border-[#1d9bf0] lg:w-[29.5%] px-2'>Jahangir<span className='text-[#1d9bf0] font-bold'>.</span></h2>
                        </div>

                        <div className={`${show ? 'block' : 'hidden'} absolute bg-[#1c689b46] lg:bg-transparent lg:flex lg:w-[65%] flex lg:justify-end justify-between items-center gap-20 top-20 lg:top-0 lg:static text-white pl-10 lg:pl-0 py-2.5 lg:py-0 w-full z-10`}>

                            <ul className='lg:flex justify-center items-center gap-8 text-sm lg:font-semibold lg:uppercase capitalize'>
                                <NavLink to='/'>
                                    <li className='customize hover:text-[#1d9bf0]'>home</li>
                                </NavLink>
                                <NavLink to='/projects'>
                                    <li className='customize hover:text-[#1d9bf0]'>projects</li>
                                </NavLink>
                                <NavLink to='/skills'>
                                    <li className='customize hover:text-[#1d9bf0]'>skills</li>
                                </NavLink>
                                <NavLink to='/about'>
                                    <li className='customize hover:text-[#1d9bf0]'>about</li>
                                </NavLink>
                            </ul>

                            <div className='pr-10 lg:pr-0'>
                                <Button className='text-white lg:text-[#1d9bf0] border-white hover:border-transparent '>Resume</Button>
                            </div>
                        </div>
                    </Flex>
                </Container>
                <AiOutlineBars onClick={handleClick} className="lg:hidden block text-2xl hover:text-[#1d9bf0] text-center right-3.5 top-6 absolute cursor-pointer"/>
            </nav>
        </>
    )
}

export default Navbar;
