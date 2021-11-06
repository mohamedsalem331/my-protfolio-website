import React, { useEffect, useRef } from 'react';
import ScrollBar from 'react-smooth-scrollbar';
import { useLocation } from 'react-router-dom';

const SmoothScrollBar = ({ children }) => {
    const { pathname } = useLocation();

    const ref = useRef(null);

    useEffect(() => {
        const { scrollbar } = ref.current;
        scrollbar.setPosition(0, 0);
    }, [pathname]);

    return (
        <>
            <ScrollBar ref={ref} damping={0.09}>
                {children}
            </ScrollBar>
        </>
    );
};

export default SmoothScrollBar;
