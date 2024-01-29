/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import Proj1 from '../src/assets/proj-pdp.jpg';
import Proj2 from '../src/assets/proj-accordion.jpg';
import Proj3 from '../src/assets/proj-anna.jpg';

export default function Projects()
{
    return (
        <>
            <div className="flex flex-col max-w-screen-2xl mx-auto p-6 pb-16">
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12'>
                    <h1>
                        projects.
                    </h1>
                    <a className='btn-secondary' href='https://donnabrar.notion.site/ed8d9c8e3ec043c09314a3e64a99ace1?v=d979066b2ef740589ba1c7efd50b0a5f' target="_blank">
                        View More projects
                    </a>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:p-6">
                    <div className="card">
                        <img src={Proj1} alt="Project 1" className='w-full h-auto aspect-video rounded-2xl mb-6 lg:mb-12'/>
                        <h2>
                            Nyla - PDP Hero Templates
                        </h2>
                        <p className='font-semibold'>
                            Role: UI/UX Designer & Web Developer
                        </p>
                        <p>
                            The product detail page of an e-commerce website is the most important page on the website because this is where customers decide whether they should purchase an item or not. Product pages help answer any questions the customer might have about the product, enables comparison between different items, affirms authenticity of the product through images & reviews, and facilitates the actual purchasing process.
                        </p>
                        <p>
                            The goal of this project was to create a versatile set of basic templates that our clients can choose from and use as a foundation for their PDP Hero designs.
                        </p>
                        <a href="https://donnabrar.notion.site/Nyla-PDP-Hero-6d455a6b48b14abba94d7f0a8e3919e0" target="_blank" className='font-bold text-blue-600'>
                            read more
                        </a>
                    </div>
                    <div className="card">
                        <img src={Proj2} alt="Project 2" className='w-full h-auto aspect-video rounded-2xl mb-6 lg:mb-12'/>
                        <h2>
                            Nyla - Accordion Templates
                        </h2>
                        <p className='font-semibold'>
                            Role: UI/UX Designer & Web Developer
                        </p>
                        <p>
                            The accordion is a useful tool in presenting blocks of text while efficiently using space in a website. It is often used in e-commerce websites to contain large blocks of text about product information or FAQs.
                        </p>
                        <p>
                            In this project, we focused on the use of accordions in building FAQ sections that our users will be able to incorporate easily on any page in their e-commerce website.
                        </p>
                        <a href="https://donnabrar.notion.site/Nyla-Accordion-0eed7341c82342e79e5a5d103687c375" target="_blank" className='font-bold text-blue-600'>
                            read more
                        </a>
                    </div>
                    <div className="card">
                        <img src={Proj3} alt="Project 3" className='w-full h-auto aspect-video rounded-2xl mb-6 lg:mb-12'/>
                        <h2>
                            Nyla - Anna Sheffield Ecommerce Website
                        </h2>
                        <p className='font-semibold'>
                            Role: Web Developer
                        </p>
                        <p>
                            Aside from the role of a UI/UX designer, I am also part of the team that develops landing pages and full websites for our e-commerce clients. Below is a gallery of some of the merchants whom we've helped transform their websites using the Nyla app.
                        </p>
                        <p>
                            This website for Anna Sheffield was built in Shopify and required the use of third party automation apps because of their large catalog.
                        </p>
                        <a href="https://donnabrar.notion.site/Nyla-Web-Development-Projects-922b4e30672848cd89da55101cddc1af" target="_blank" className='font-bold text-blue-600'>
                            read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}