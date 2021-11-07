import React from 'react';
import styled from 'styled-components';
import PText from '../components/Ptext';
import Button from '../components/Button';
import AboutImg from '../assets/images/image.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import OverLay from '../components/OverLay';
import { motion } from 'framer-motion';

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left {
        flex: 4;
    }
    .right {
        flex: 2;
    }
    .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
            background-color: var(--deep-dark);
            padding: 0.7rem;
            border-radius: 8px;
        }
    }
    .about__heading {
        font-size: 3.6rem;
        margin-bottom: 5rem;
    }
    .about__info {
        margin-bottom: 4rem;
        .para {
            max-width: 100%;
        }
    }
    .right {
        img {
            border: 2px solid var(--gray-1);
        }
    }
    .about__info__items {
        margin-top: 15rem;
    }
    .about__info__item {
        margin-bottom: 10rem;
    }
    .about__info__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .top-section {
            flex-direction: column;
            gap: 5rem;
        }
        .about__subheading {
            font-size: 1.8rem;
        }
        .about__heading {
            font-size: 2.8rem;
        }
        .about__info__heading {
            font-size: 3rem;
        }
    }
`;

export default function About() {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <OverLay />

                    <motion.div
                        className="top-section"
                        animate={{ y: [200, 0] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        exit={{ x: '-100vw' }}
                    >
                        <div className="left">
                            <p className="about__subheading">
                                Hi, I am <span>Mohamed Salem</span>
                            </p>
                            <h2 className="about__heading">
                                A Freelance Fullstack Developer
                            </h2>
                            <div className="about__info">
                                <PText>
                                    I am from Cairo, Egypt. i love coding and
                                    design. I always try to develop new stuff
                                    with my unique point of view. I also love to
                                    create things that can be useful to my
                                    clients or others, Arabic is my mother
                                    tongue but i also speak English and German.
                                    <br /> <br />
                                    I started coding since I was in high school.
                                    Coding is also an art for me. I loved
                                    developing complex and dynamic web
                                    applications along with creating websites
                                    with highly interactive animations using
                                    libraries like Three.js.
                                    <br />
                                    <br />
                                    My vision is to make the world a better
                                    place. Now almost everything is becoming
                                    better than ever. It is time for us to
                                    create more good stuff that helps the world
                                    to become a better place.
                                </PText>
                            </div>
                            <Button
                                btnText="Download CV"
                                btnLink="#"
                                downloadB
                            />
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me" />
                        </div>
                    </motion.div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>

                            <AboutInfoItem
                                title="School"
                                items={['Maadi Canal, High School.']}
                            />
                            <AboutInfoItem
                                title="College"
                                items={['Management Information System']}
                            />
                            <AboutInfoItem
                                title="University"
                                items={[
                                    'Modern University For Science and Arts'
                                ]}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>

                            <AboutInfoItem
                                title="Frontend"
                                items={[
                                    'HTML5',
                                    'CSS3',
                                    'JavaScript',
                                    'TypeScript',
                                    'Bootstrap5',
                                    'Reactjs',
                                    'Redux',
                                    'React Native',
                                    'Wordpress'
                                ]}
                            />
                            <AboutInfoItem
                                title="Backend"
                                items={[
                                    'Nodejs',
                                    'Expressjs',
                                    'MongoDB',
                                    'MySQL',
                                    'Python',
                                    'Django',
                                    'JWT',
                                    'Firebase',
                                    'Jest'
                                ]}
                            />
                            <AboutInfoItem
                                title="Design"
                                items={[
                                    'Photoshop',
                                    'After Effects',
                                    'Figma',
                                    'Visual Paradigm'
                                ]}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">
                                Experiences
                            </h1>

                            <AboutInfoItem
                                title="2018-2019"
                                items={['Junior developer at Deriv']}
                            />
                            <AboutInfoItem
                                title="2019-2019"
                                items={['Frontend developer at BSmart']}
                            />
                            <AboutInfoItem
                                title="2020-"
                                items={['Freelance Fullstack Developer']}
                            />
                        </div>
                    </div>
                </div>
                <ContactBanner />
            </AboutPageStyles>
        </>
    );
}
