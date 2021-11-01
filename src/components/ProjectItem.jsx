import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
    .projectItem_img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img {
            height: 100%;
            transition: 0.5s;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
    .projectItem_info {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem_title {
        font-size: 2.2rem;
    }
    .projectItem_desc {
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
        line-height: 2.5rem;
        text-align: justify;
        text-justify: inter-word;
    }
    @media only screen and (max-width: 768px) {
        .projectItem_img {
            height: 350px;
        }
    }
`;

const ProjectItem = ({ img, title, desc, link }) => {
    return (
        <ProjectItemStyles>
            <Link to="/projects" className="projectItem_img">
                <img src={img} alt="project img" />
            </Link>
            <div className="projectItem_info">
                <a href={link}>
                    <h3 className="projectItem_title">{title}</h3>
                </a>
                <p className="projectItem_desc">{desc}</p>
            </div>
        </ProjectItemStyles>
    );
};

export default ProjectItem;
