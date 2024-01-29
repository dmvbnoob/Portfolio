/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import Serv1 from '../src/assets/web.svg';
import Serv2 from '../src/assets/mob.svg';
import Serv3 from '../src/assets/shop.svg';
import { Link } from 'react-router-dom';

export default function Services()
{
    return (
        <>
            <div className="flex flex-col max-w-screen-2xl mx-auto p-6 pb-16">
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12'>
                    <h1>
                        services.
                    </h1>
                    <Link to="/contact">
                        <button className='btn-secondary'>
                            Let's Chat
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:p-6">
                    <div className="card">
                        <img src={Serv1} alt="Web Development" className='w-full h-auto aspect-video rounded-2xl mb-6 lg:mb-12'/>
                        <h2>
                            Web Design & Development
                        </h2>
                        <p>
                            Elevate your digital presence with my Web Design & Development service. I specialize in creating custom, responsive websites that blend stunning visuals with functionality. With a focus on user experience, SEO, and performance, I ensure your site not only looks great but also effectively engages and grows your audience.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Serv2} alt="Mobile Development" className='w-full h-auto aspect-video rounded-2xl mb-6 lg:mb-12'/>
                        <h2>
                            Mobile App Design & Development
                        </h2>
                        <p>
                            Turn your app vision into reality with my Mobile App Design & Development service. Catering to both iOS and Android platforms, I develop intuitive, impactful apps tailored to your needs. From concept to launch, I focus on creating a seamless user experience that stands out in today's competitive app market.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Serv3} alt="Web Development" className='w-full h-auto aspect-video rounded-2xl mb-6 lg:mb-12'/>
                        <h2>
                            Shopify Ecommerce Store Design & Development
                        </h2>
                        <p>
                            Transform your online store with my Shopify Ecommerce Store Design & Development service. I create custom Shopify sites that are visually appealing, user-friendly, and optimized for sales. Specializing in responsive design and effective feature integration, I help you thrive in the ecommerce space.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}