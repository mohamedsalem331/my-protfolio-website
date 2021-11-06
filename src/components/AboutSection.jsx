import React from 'react';
import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
    padding: 8rem 0;

    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }

    .aboutSection_left,
    .aboutSection_right {
        flex: 1;
    }
    .section-title {
        text-align: left;
    }
    .para {
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection_buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }

    @media only screen and (max-width: 950px) {
        .aboutSection_left {
            flex: 4;
        }
        .aboutSection_right {
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            text-align: center;
        }
        .aboutSection_left,
        .aboutSection_right {
            width: 100%;
        }
        .aboutSection_right {
            margin-top: 3rem;
        }
        .section-title {
            text-align: center;
        }
        .para {
            margin: 0 auto;
            margin-top: 2 rem;
        }
        .aboutSection_buttons {
            flex-direction: column;
            gap: 0;
            .button-wrapper,
            a {
                width: 100%;
                text-align: center;
            }
        }
    }
`;

const AboutSection = () => {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection_left">
                    <SectionTitle
                        subheading="Let me introduce MySelf"
                        heading="About me"
                    />

                    <Ptext>
                        I am a freelance software developer from Caito, Egypt. I
                        create professional websites, using my 4 years of
                        experience. I love desiging and developing unique and
                        interactive websites for my clients by adapting modern
                        and robust frameworks / libraries.
                    </Ptext>
                    <div className="aboutSection_buttons">
                        <Button btnLink="/projects" btnText="Works" />
                        <Button btnLink="/about" btnText="Read More" outline />
                    </div>
                </div>
                <div className="aboutSection_right">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSectionStyle>
    );
};

export default AboutSection;
