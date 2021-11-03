import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import { motion } from 'framer-motion';
import '../components/Overlay.css';

const Home = () => {
    return (
        <>
            {/* <motion.div
                className="overlay"
                animate={{
                    y: [0, 1000],
                    height: '0%'
                }}
                // exit={{ height: '100%' }}
                transition={{ duration: 1 }}
            ></motion.div> */}
            <motion.div animate={{ y: [200, 0] }} transition={{ duration: 1 }}>
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
