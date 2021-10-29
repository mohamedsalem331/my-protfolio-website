import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';

const ContactBannerStyles = styled.div`
    padding: 5rem 0;
    .contactBanner_wrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;
    }
    .contactBanner_heading {
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .contactBanner_heading {
            font-size: 2.8rem;
        }
    }
`;

const ContactBanner = () => {
    return (
        <ContactBannerStyles>
            <div className="container">
                <div className="contactBanner_wrapper">
                    <Ptext>Have a Project in mind</Ptext>
                    <h3 className="contactBanner_heading">
                        Let me Help you now
                    </h3>
                    <Button btnText="Contact Now" btnLink="/"></Button>
                </div>
            </div>
        </ContactBannerStyles>
    );
};

export default ContactBanner;
