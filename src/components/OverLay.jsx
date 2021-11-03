import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './Overlay.css';

const OverLay = () => {
    return (
        <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 2 }}
            className="overlay"
        ></motion.div>
    );
};

export default OverLay;
