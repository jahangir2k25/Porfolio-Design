import Container from './Container';
import { FaRegCopyright } from "react-icons/fa6";
import Flex from './Flex';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <Container>
        <Flex className='justify-between pt-50 gap-4'>
          <div>
            <h2 className='font-bold text-xl border-l-3 border-b-1 border-[#1d9bf0] w-[40%] px-1'>Jahangir<span className='text-[#1d9bf0] font-bold'>.</span></h2>
            <div className='mt-20'>
              <h2 className='text-2xl text-center'>Connect with</h2>
              <div className='mt-2 flex gap-2'>
                <div className='w-8 h-8 rounded-full bg-[#1d9bf0] flex justify-center items-center cursor-pointer hover:bg-[#1d9cf069] transition-all duration-300'>
                  <FaFacebookF />
                </div>
                <div className='w-8 h-8 rounded-full bg-[#1d9bf0] flex justify-center items-center cursor-pointer hover:bg-[#1d9cf069] transition-all duration-300'>
                  <FaTwitter />
                </div>
                <div className='w-8 h-8 rounded-full bg-[#1d9bf0] flex justify-center items-center cursor-pointer hover:bg-[#1d9cf069] transition-all duration-300'>
                  <AiFillInstagram />
                </div>
                <div className='w-8 h-8 rounded-full bg-[#1d9bf0] flex justify-center items-center cursor-pointer hover:bg-[#1d9cf069] transition-all duration-300'>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className='font-poppins capitalize'>
              <li className='text-[#1d9bf0] text-2xl'>Contact</li>
              <li>whats app: 01742469522</li>
              <li>email: jahangir.raj@yahoo.com</li>
              <li>mirpur 10, dhaka</li>
            </ul>
          </div>
        </Flex>
      </Container>
      <div className='border-[#1d9cf069] border-b-2 w-full pt-4'></div>
      <div className='flex justify-center items-center gap-1 pt-2.5'>
        <FaRegCopyright />
        <h2 className='text-center'>2025 <span className='text-[#1d9bf0] uppercase'>Jahangir Hosain</span>. All right reserved</h2>
      </div>
    </footer>
  )
}

export default Footer;
