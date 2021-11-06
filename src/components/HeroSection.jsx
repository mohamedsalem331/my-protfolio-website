import React, { useEffect } from 'react';
import HeroImg from '../assets/images/heroo.png';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import SocialDownArrow from '../assets/images/scroll-down-arrow.svg';
import Button from './Button';
import Ptext from './Ptext';
import styled from 'styled-components';

const HeroStyles = styled.div`
    .hero {
        height: 100vh;
        min-height: 1050px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero_heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
        .hero_name {
            font-family: 'Montserrat SemiBold';
            font-size: 7rem;
            background: var(--solid-orange);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 5px;
        }
    }
    .hero_img {
        max-width: 900px;
        width: 100%;
        height: 630px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero_info {
        margin-top: -18rem;
    }
    .hero_social,
    .hero_scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 15%;
        width: 50px;
    }
    .hero_social {
        left: 50px;
    }
    .hero_scrollDown {
        right: 50px;
    }
    .hero_social_indicator,
    .hero_scrollDown {
        width: 50px;
        p {
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 0.7rem;
            text-transform: uppercase;
        }
        img {
            max-height: 20px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }
    .hero_scrollDown {
        img {
            max-height: 70px;
        }
    }
    .hero_social_text {
        ul {
            li {
                margin-bottom: 1rem;
                a {
                    display: inline-block;
                    font-size: 2.5rem;
                    transform: rotate(-90deg);
                    letter-spacing: 5px;
                    margin-bottom: 2rem;
                    color: var(--gray-1);
                }
            }
        }
    }
    @media only screen and (max-width: 768px) {
        .hero {
            min-height: 120rem;
        }
        .hero_heading {
            font-size: 1.5rem;
            margin-bottom: -3rem;
            .hero_name {
                font-size: 6rem;
            }
        }
        .hero__img {
            height: 300px;
        }
        .hero_info {
            margin-top: 3rem;
        }
        .hero_social {
            left: 0px;
            bottom: -15%;
            width: 20px;
            .hero_social_indicator {
                width: 20px;
                p {
                    font-size: 1.2rem;
                }
                img {
                    max-height: 22px;
                }
            }
            .hero_social_text {
                ul {
                    li {
                        a {
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
        .hero_scrollDown {
            right: 0;
            width: 20px;
            gap: 1rem;
            p {
                font-size: 1.3rem;
            }
        }
    }
`;

const HeroSection = () => {
    useEffect(() => {
        [HeroImg, SocialDownArrow, SocialMediaArrow].forEach((image) => {
            new Image().src = image;
        });
    }, []);
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero_heading">
                        <span>Hello This is</span>
                        <span className="hero_name">Mohamed Salem</span>
                    </h1>
                    <div className="hero_img">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="hero_info">
                        <Ptext>
                            I am a Freelance Fullstack Web Developer with 4
                            years Experience. I love to design and code new web
                            experiences for clients.
                        </Ptext>
                        <Button
                            btnLink="/projects"
                            btnText="See my Works"
                            outline={false}
                        />
                    </div>
                    <div className="hero_social">
                        <div className="hero_social_indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="" />
                        </div>
                        <div className="hero_social_text">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.facebook.com/mohamed.motaleb.3/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        FB
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/mohamed-mohamed-abdelmotaleb-mohamed-3a1293212/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Mohamed3331"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GH
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero_scrollDown">
                        <p>Scroll</p>
                        <img src={SocialDownArrow} alt="" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    );
};

export default HeroSection;
