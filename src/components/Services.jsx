import React from 'react'
import Container from './Container';
import Card from './Card';
import Img1 from '../assets/Card1.jpg';
import Img2 from '../assets/card2.jpg';
import Img3 from '../assets/card3.jpg';

const Services = () => {
    return (
        <>
            <Container>
                <h2 className='text-4xl text-center lg:pt-5 pt-50'>My <span className='text-[#1d9bf0]'>Services</span></h2>
                <div className='flex flex-col lg:flex-row gap-6 p-6 lg:mt-10 justify-between items-center'>
                    <div>
                        <Card
                            img={Img1}
                            heading="Responsive Web Design"
                            description="I will do responsive web designs. using HTML, CSS, JAVASCRIPT, BOOTSTRAP, using media query. Fully responsive & Pixel perfect Qualityfull designs as you want."
                        />
                    </div>
                    <div>
                        <Card
                            img={Img2}
                            heading="Vite+React Aplication"
                            description="I will do Vite + React Aplications, designs. using HTML, CSS, JAVASCRIPT, Tailwind CSS, VIte JS, REACT JS Fully responsive & Pixel perfect Qualityfull designs as you want."
                        />
                    </div>
                    <div>
                        <Card
                            img={Img3}
                            heading="Frontend development"
                            description="I will  do  any kind of frontEnd development designs & Aplications. using HTML, CSS, JAVASCRIPT, Tailwind CSS, VIte JS, REACT JS Fully responsive & Pixel perfect Qualityfull designs as you want."
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Services;
