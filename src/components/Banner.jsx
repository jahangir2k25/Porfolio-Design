import SelfImg from '../assets/img.png';
import Container from './Container';
import Button from './Button';
import Galaxy from './Galaxy';



const Banner = () => {
  return (
    <section>
      <div className='relative w-full h-[100vh] overflow-hidden'>
        <Galaxy />
      </div>

      <Container className="relative">
        <div className='absolute bottom-25 pl-0 lg:pl-0 w-full'>
          <div className="lg:flex grid grid-cols-1 justify-between items-center">
            <div className="lg:w-170 w-70">
              <h1 className='text-4xl'>Hi, I'm <span className='text-[#ffc400] font-poppins font-bold'>Jahangir Hosain</span></h1>
              <h2 className='text-2xl text-[#1d9bf0] font-poppins py-2.5'>Front-end Developer</h2>

              <p> I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with good knowledge and proficiency <span className='text-[#1d9bf0]'> HTML, CSS,   Bootstrap, Tailwind CSS, Javascript, React Js, Vite Js and Mobile responsive website development,</span> as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable. </p>

              <div className='flex gap-6 pt-8'>
                <Button>hire me</Button>
                <Button>let's talk</Button>
              </div>
            </div>

            <div>
              <img className='shadow-[#1d9bf0] shadow-lg h-100 rounded-lg' src={SelfImg} alt="#" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner;