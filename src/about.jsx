import { Link } from 'react-router-dom';
import CV from '../src/assets/DonnaBrar_CV.pdf';
import HeadShot from '../src/assets/DBrar_Headshot.jpeg';
import Heart from '../src/assets/heart.svg';

export default function  About()
{
    return (
        <>
            <div className="flex flex-row justify-between gap-12 items-end max-w-screen-2xl mx-auto p-6 h-[85vh]">
                <div className='flex flex-col w-1/2 justify-end items-start h-full'>
                    <h1>
                        about me.
                    </h1>
                    <h2>
                        My name is Donna and I'm a software developer nad UI/UX designer based in Toronto, Canada.
                    </h2>
                    <p>
                        I am currently enrolled in the Software Engineering Technology Advanced Diploma program at Centennial College and expect to graduate in April 2025. My experience as a software developer involved both front-end and back-end technologies.
                    </p>
                    <p>
                        As a UI/UX designer, I have experience in different areas such as wireframing and prototyping, research, documentation, and project management.
                    </p>
                    <div className="flex flex-row gap-4 justify-start mt-4">
                        <a className='btn-primary' href={CV} target='_blank'>
                            Download CV
                        </a>
                        <Link to="/contact">
                            <button className='btn-secondary'>
                                Let's Chat
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 justify-center items-center h-full'>
                    <div className='relative'>
                        <img src={HeadShot} alt="Donna Brar" className='h-80 rounded-3xl shadow-md'/>
                        <img src={Heart} alt="Heart" className='h-32 transition-all ease-in-out duration-[6000ms] rotate-12 hover:-rotate-90 absolute -bottom-16 -right-16'/>
                    </div>
                </div>
            </div>
        </>
    );
}