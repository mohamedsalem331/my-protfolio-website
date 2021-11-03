import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
    /* width: 100%; */
    .form-group {
        /* width: 100%; */
        margin-bottom: 3rem;
    }
    label {
        font-size: 1.8rem;
    }
    input,
    textarea {
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea {
        min-height: 250px;
        resize: none;
    }
    button[type='submit'] {
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
    }
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_8a6up1v',
                'template_ws4fcr5',
                form.current,
                'user_8VDrfk1XFhboSv0RdbObI'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <FormStyle ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">
                        Your Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Your email
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Your Message
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit" value="Send">
                    Send
                </button>
            </FormStyle>
        </div>
    );
};

export default ContactForm;
