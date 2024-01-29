/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import Flower from '../src/assets/flower.svg';
import Star from '../src/assets/star.svg';
import { Link } from 'react-router-dom';

export default function Home()
{
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between gap-12 items-end max-w-screen-2xl mx-auto p-6 lg:h-[85vh] pb-16 lg:pb-0">
                <div className='flex flex-col w-full lg:w-1/2 justify-end items-start h-full order-2 lg:order-1'>
                    <h1>
                        hello.
                    </h1>
                    <h2>
                        My name is Donna Brar, and I am a software developer and UI/UX designer.
                    </h2>
                    <h2>
                        My expertise is in creating branded experiences by creating high-fidelity wireframes in Figma, and translating them into engaging websites & apps.
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-4 justify-start mt-4">
                        <Link to="/about">
                            <button className='btn-primary'>
                                About Me
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className='btn-secondary'>
                                Let's Chat
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col w-full lg:w-1/2 justify-center items-center h-full relative order-1 lg:order-2'>
                    <img src={Flower} alt="Flower" className='h-48 pr-24 lg:pr-0 lg:h-80 transition-all ease-in-out duration-[6000ms] -rotate-12 hover:rotate-90 relative lg:absolute top-0 lg:top-24 left-2 lg:left-5'/>
                    <img src={Star} alt="Star" className='h-24 pl-32 lg:pl-0 lg:h-56 transition-all ease-in-out duration-[6000ms] rotate-6 hover:-rotate-90 relative lg:absolute bottom-0 lg:bottom-12 right-0 lg:right-6'/>
                </div>
            </div>
        </>
    );
}