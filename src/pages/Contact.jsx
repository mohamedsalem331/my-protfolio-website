import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';
import { motion } from 'framer-motion';
import OverLay from '../components/OverLay';

const Contact = () => {
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <OverLay />
                <motion.div
                    className="top-section"
                    animate={{ y: [200, 0] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    exit={{ x: '-100vw' }}
                >
                    <ContactSection />
                    <Map />
                </motion.div>
            </div>
        </>
    );
};

export default Contact;
