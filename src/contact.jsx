/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import Mail from '../src/assets/mail.svg';
import Phone from '../src/assets/phone.svg';
import Linkedin from '../src/assets/linkedin.svg';
import Calendar from '../src/assets/calendar.svg';
import ContactForm from '../components/contactForm.jsx'

export default function Contact()
{
    return (
        <>
            <div className='lg:h-[90vh]'>
                <div className="flex flex-col lg:flex-row justify-between gap-12 items-end max-w-screen-2xl mx-auto p-6 lg:h-[85vh] pb-16 lg:pb-0">
                    <div className='flex flex-col w-full lg:w-1/2 justify-end items-start h-full'>
                        <h1>
                            say hi!
                        </h1>
                        <h2>
                            Got questions about my services or just want to chat? Drop me a line! I'm always here to talk shop or just share a friendly hello. Can't wait to hear from you!
                        </h2>
                        <a href="mailto:dmvbrar@gmail.com" className="flex flex-row justify-start items-center py-2 px-4 gap-4">
                            <img src={Mail} alt='Email' className='h-5 aspect-square' />
                            <p className='font-bold mb-0'>
                                dmvbrar@gmail.com
                            </p>
                        </a>
                        <a href="tel:+16472674197" className="flex flex-row justify-start items-center py-2 px-4 gap-4">
                            <img src={Phone} alt='Phone' className='h-5 aspect-square' />
                            <p className='font-bold mb-0'>
                                +1 647 267 4197
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/in/dmbrar/" target="_blank" className="flex flex-row justify-start items-center py-2 px-4 gap-4">
                            <img src={Linkedin} alt='LinkedIn' className='h-5 aspect-square' />
                            <p className='font-bold mb-0'>
                                /dmbrar
                            </p>
                        </a>
                        <a href="https://calendly.com/dmvbrar/30min" target="_blank" className="flex flex-row justify-start items-center py-2 px-4 gap-4">
                            <img src={Calendar} alt='Calendly' className='h-5 aspect-square' />
                            <p className='font-bold mb-0'>
                                Book a 30 minute call with me!
                            </p>
                        </a>
                    </div>
                    <div className='flex flex-col w-full lg:w-1/2 justify-end items-start h-full lg:px-12'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}