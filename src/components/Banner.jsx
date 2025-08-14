import SelfImg from '../assets/img.png';
import Container from './Container';
import Button from './Button';


const Banner = () => {
  return (
    <Container>
      <div className="flex justify-between items-center pt-10">
        <div className="w-170 ">
          <h1 className='text-4xl'>Hi, I'm <span className='text-[#ffc400] font-poppins font-bold'>Jahangir Hosain</span></h1>
          <h2 className='text-2xl text-[#1d9bf0] font-poppins py-2.5'>Front-end Developer</h2>

          <p> I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with good knowledge and proficiency <span className='text-[#1d9bf0]'> HTML, CSS,   Bootstrap, Tailwind CSS, Javascript, React Js, Vite Js and Mobile responsive website development,</span> as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable. </p>

          <div className='flex gap-6 pt-8'>
            <Button>hire me</Button>
            <Button>let's talk</Button>
          </div>
        </div>
        <div>
          <img className='shadow-[#1d9bf0] shadow-lg h-100 rounded-lg pr-3.5' src={SelfImg} alt="#" />
        </div>
      </div>
    </Container>
  )
}

export default Banner;

