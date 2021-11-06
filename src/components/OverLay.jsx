import React from 'react';
import { motion } from 'framer-motion';

import './Overlay.css';

const OverLay = () => {
    return (
        <motion.div
            className="overlay"
            animate={{
                height: ['100vh', '0vh']
            }}
            exit={{ height: '100vh' }}
            transition={{ duration: 1 }}
        ></motion.div>
    );
};

export default OverLay;
