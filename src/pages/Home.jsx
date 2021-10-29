import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialSection />
            <ContactBanner />
        </div>
    );
};

export default Home;
