import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import { MdPlace } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
    padding: 10rem 0;
    .contactSection-wrapper {
        position: relative;
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
    }
    .contactSection-wrapper::after {
        position: absolute;
        left: 50%;
        top: 5%;
        transform: translate(-50% -50%);
        content: '';
        width: 2px;
        height: 70%;
        background-color: var(--gray-1);
    }
    .left {
        width: 100%;
        max-width: 500px;
    }
    .right {
        max-width: 500px;
        width: 100%;
        border-radius: 12px;
    }
    @media only screen and (max-width: 1070px) {
        .contactSection-wrapper {
            flex-direction: column;
        }
        .contactSection-wrapper::after {
            display: none;
        }
        .left,
        .right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;

const ContactSection = () => {
    return (
        <>
            <ContactSectionStyle>
                <div className="container">
                    <SectionTitle heading="Contact" subheading="Get in Touch" />
                    <div className="contactSection-wrapper">
                        <div className="left">
                            <ContactInfoItem
                                icon={<MdLocalPhone />}
                                text="+201281115712"
                            />
                            <ContactInfoItem
                                icon={<MdEmail />}
                                text="mohamed_salem331@hotmail.com"
                            />
                            <ContactInfoItem
                                icon={<BsGithub />}
                                text="github.com/Mohamed3331"
                            />
                            <ContactInfoItem
                                icon={<MdPlace />}
                                text="Cairo, Egypt"
                            />
                        </div>
                        <div className="right">
                            <ContactForm />
                        </div>
                    </div>
                    {console.log('i raan')}
                </div>
            </ContactSectionStyle>
        </>
    );
};

export default ContactSection;
