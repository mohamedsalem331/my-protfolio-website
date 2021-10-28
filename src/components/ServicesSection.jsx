import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import styled from 'styled-components';
import {
    MdOutlineDesignServices,
    MdDesktopMac,
    MdCode,
    MdPhonelinkSetup
} from 'react-icons/md';

const ServicesItemStyles = styled.div`
    padding: 10rem 0;

    .services_allItems {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10rem;
        margin-top: 5rem;
    }

    @media only screen and (max-width: 1220px) {
        .services_allItems {
            display: grid;
            grid-template-columns: 1fr;
        }
    }
`;

const ServicesSection = () => {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle
                    heading="Services"
                    subheading="What i will do for you"
                />
                <div className="services_allItems">
                    <ServicesSectionItem
                        icon={<MdCode />}
                        title="Web Development"
                        desc="I develop modern custom designed Websites using Robust Frameworks/Libraries and Programming Languages. I deliver Fast, Responsive, Animated and Interactive Websites."
                    />
                    <ServicesSectionItem
                        icon={<MdPhonelinkSetup />}
                        title="App Development"
                        desc="I develop Amazingly Astonishing Mobile Applications for both Android and IOS, Using Robust Frameworks/Libraries that run on all devices with Transitions and Animations."
                    />
                    <ServicesSectionItem
                        icon={<MdDesktopMac />}
                        title="Desktop Development"
                        desc="I develop custom desktop applications with complex functionalities."
                    />
                    <ServicesSectionItem
                        icon={<MdOutlineDesignServices />}
                        title="Web Design"
                        desc="I do UI and UX for websites and applications, using Modern design practices and tools."
                    />
                </div>
            </div>
        </ServicesItemStyles>
    );
};

export default ServicesSection;
