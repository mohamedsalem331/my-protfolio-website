import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './Ptext';
import SectionTitle from './SectionTitle';
import testimonials from '../assets/data/testimonials';

const TestimonialSectionStyles = styled.div`
    padding: 10rem 0;
    text-align: center;
    .testimonial_wrapper {
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .testimonial_info {
        width: 100%;
        height: fit-content;
        padding: 3rem;
        background-color: var(--deep-dark);
        border-radius: 12px;
        margin-top: 5rem;
    }
    .testimonial_desc {
        .para {
            text-align: center;
        }
    }
    .testimonial_name {
        margin-top: 4rem;
        font-family: 'Montserrat Bold';
        font-size: 2.2rem;
    }
    .testimonial_title {
        font-size: 1.6rem;
        margin-top: 0.3rem;
    }
    .arrows {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg {
        width: 30px;
        pointer-events: none;
    }
    .next,
    .prev {
        margin: 0 0.5rem;
        width: fit-content;
        background-color: var(--deep-dark);
        padding: 0.5rem 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-enter-active {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-exit-active {
        transition: opacity 600ms;
    }

    @media only screen and (max-width: 768px) {
        .testimonial_desc {
            .para {
                font-size: 16px;
            }
        }
        .testimonial_info {
            padding: 2rem;
        }
    }
`;

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex];

    function handleNext() {
        if (activeIndex >= testimonials.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    }
    function handlePrev() {
        if (activeIndex === 0) {
            setActiveIndex(testimonials.length - 1);
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    }

    return (
        <TestimonialSectionStyles>
            <div className="container">
                <SectionTitle
                    subheading="see what our clients say about me"
                    heading="Testimonials"
                />

                <div className="testimonial_wrapper">
                    <SwitchTransition component={null}>
                        <CSSTransition
                            key={activeSlide.id}
                            timeout={300}
                            classNames="fade"
                        >
                            <div className="testimonial_info">
                                <div className="testimonial_desc">
                                    <PText>{activeSlide.desc}</PText>
                                </div>
                                <h2 className="testimonial_name">
                                    {activeSlide.name}
                                </h2>
                                <p className="testimonial_title">
                                    {activeSlide.title}, <br />
                                    {activeSlide.org}
                                </p>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>

                <div className="arrows">
                    <div
                        className="prev"
                        onClick={handlePrev}
                        role="button"
                        tabIndex={0}
                    >
                        <MdArrowBack />
                    </div>
                    <div
                        className="next"
                        onClick={handleNext}
                        role="button"
                        tabIndex={0}
                    >
                        <MdArrowForward />
                    </div>
                </div>
            </div>
        </TestimonialSectionStyles>
    );
}
