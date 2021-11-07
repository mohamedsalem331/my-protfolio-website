import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { getMyProjectsContent } from '../api/contentful';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const ProjectSectionStyle = styled.div`
    padding: 10rem 0;
    .projects_allItems {
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper {
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background: var(--deep-dark);
        z-index: 10;
        right: 40px;
        left: auto;
        top: 0;
        transform: translateY(30px);
        color: var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-prev {
        right: 110px;
    }
    .swiper-button-prev::after,
    .swiper-button-next:after {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        padding: 3rem 0;
        .projects__allItems {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            gap: 5rem;
            .projectItem__img {
                width: 100%;
            }
        }
    }
`;

SwiperCore.use([Navigation]);

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);

    const loadMyProjects = async () => {
        const allProjects = await getMyProjectsContent();
        setProjects(allProjects);
    };

    useEffect(() => {
        loadMyProjects();
    }, []);

    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle
                    heading="projects"
                    subheading="some of my recent works"
                />
                <div className="projects_allItems">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                slidesPerView: 1
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {projects &&
                            projects.map(
                                ({ img, description, name, link }, index) => {
                                    if (index > 5) {
                                        return null;
                                    } else {
                                        return (
                                            <SwiperSlide key={index}>
                                                <ProjectItem
                                                    img={img.fields.file.url}
                                                    desc={description}
                                                    link={link}
                                                    title={name}
                                                />
                                            </SwiperSlide>
                                        );
                                    }
                                }
                            )}
                    </Swiper>
                </div>
            </div>
        </ProjectSectionStyle>
    );
};
// img.fields.file.url  description    link   name
export default ProjectsSection;
