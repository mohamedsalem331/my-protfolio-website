import React, { useRef } from 'react';
import ScrollBar from 'react-smooth-scrollbar';

const SmoothScrollBar = ({ children }) => {
    const ref = useRef(null);

    return (
        <ScrollBar ref={ref} damping={0.09}>
            {children}
        </ScrollBar>
    );
};

export default SmoothScrollBar;
