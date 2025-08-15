import { NavLink } from 'react-router';
import Button from './Button';
import Container from './Container';
import Flex from './Flex';

const Navbar = () => {
    return (
        <>
            <nav className='font-poppins lg:flex hidden'>
                <Container>
                    <Flex className='justify-between items-center py-6'>
                        <div>
                            <h2 className='font-bold text-3xl border-l-4 border-b-2 border-[#1d9bf0] w-[65%] px-2'>Jahangir<span className='text-[#1d9bf0] font-bold'>.</span></h2>
                        </div>
                        <div className='flex justify-end items-center gap-20'>
                            <ul className='flex justify-center items-center gap-8 text-lg font-semibold uppercase cursor-pointer'>
                                <NavLink to='/'>
                                    <li className='customize'>home</li>
                                </NavLink>
                                <NavLink to='/projects'>
                                    <li className='customize'>projects</li>
                                </NavLink>
                                <NavLink to='/skills'>
                                    <li className='customize'>skills</li>
                                </NavLink>
                                <NavLink to='/about'>
                                    <li className='customize'>about</li>
                                </NavLink>
                            </ul>
                            <Button>Resume</Button>
                        </div>
                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default Navbar;
