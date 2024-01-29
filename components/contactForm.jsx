/*
Assignment 1
Donna Marie Brar
301369346
January 28, 2024
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='w-full flex flex-col justify-start items-start gap-6'>
                <div className='w-full flex flex-col gap-2 justify-start items-start'>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='input' />
                </div>
                <div className='w-full flex flex-col gap-2 justify-start items-start'>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className='input' />
                </div>
                <div className='w-full flex flex-col gap-2 justify-start items-start'>
                    <label htmlFor="subject">subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className='input' />
                </div>
                <div className='w-full flex flex-col gap-2 justify-start items-start'>
                    <label htmlFor="message">message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className='input'></textarea>
                </div>
                <button type="submit" className='btn-primary'>send</button>
            </form>
        </>
    );
}
