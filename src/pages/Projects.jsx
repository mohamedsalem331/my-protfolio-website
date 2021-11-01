import React, { useState, useEffect } from 'react';
import { getMyProjectsContent } from '../api/contentful';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import { MdSearch } from 'react-icons/md';
import ProjectItem from '../components/ProjectItem';

const ProjectStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .projects_allItems {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
    }
    .projects_searchBar {
        position: relative;
        width: 300px;
        margin-top: 5rem;
    }
    .projects_searchBar input {
        width: 100%;
        font-size: 2rem;
        padding: 0.8rem;
        color: var(--black);
        border-radius: 6px;
        outline: none;
        border: none;
    }
    .projects_searchBar .searchIcon {
        position: absolute;
        width: 2rem;
        right: 1rem;
    }
    .projects_searchBar .searchIcon path {
        color: var(--deep-dark);
    }
    @media only screen and (max-width: 768px) {
        .projects_searchBar,
        .projects_searchBar form,
        .projects_searchBar input {
            width: 100%;
        }
    }
`;

const LoadingStyles = styled.h1`
    position: absolute;
    text-align: center;
    font-size: 30px;
    letter-spacing: 1px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: orange;
`;

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [searchText, setSearchText] = useState('');

    const loadMyProjects = async () => {
        const allProjects = await getMyProjectsContent();
        setProjects(allProjects);
    };

    const handleChange = async (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setProjects(await getMyProjectsContent());
        } else {
            setProjects(() =>
                projects.filter((item) =>
                    item.name.toLowerCase().match(searchText.toLowerCase())
                )
            );
        }
    };

    useEffect(() => {
        loadMyProjects();
    }, []);

    const LoadingData = () => (
        <div style={{ height: '100vh' }}>
            <LoadingStyles>Loading Projects Data....</LoadingStyles>
        </div>
    );

    return (
        <ProjectStyles>
            <div className="container">
                <div className="projects_searchBar">
                    <form>
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Project Name..."
                        />
                        <MdSearch className="searchIcon" />
                    </form>
                </div>
                <SectionTitle
                    heading="projects"
                    subheading="some of my recent works"
                />
                <div className="projects_allItems">
                    {projects.length > 0 ? (
                        projects.map(
                            ({ img, description, name, link }, index) => {
                                return (
                                    <ProjectItem
                                        key={index}
                                        img={img.fields.file.url}
                                        desc={description}
                                        link={link}
                                        title={name}
                                    />
                                );
                            }
                        )
                    ) : (
                        <LoadingData />
                    )}
                </div>
            </div>
        </ProjectStyles>
    );
};

export default Projects;
