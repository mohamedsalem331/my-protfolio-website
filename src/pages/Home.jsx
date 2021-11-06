import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import OverLay from '../components/OverLay';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <OverLay />
            <motion.div
                animate={{ y: [200, 0] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                exit={{ x: '-100vw' }}
            >
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <TestimonialSection />
                <ContactBanner />
            </motion.div>
        </>
    );
};
export default Home;
