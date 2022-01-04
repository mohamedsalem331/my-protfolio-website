import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function Fofo() {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={44}
                color="255, 160, 1"
                outerAlpha={0.3}
                innerScale={0.7}
                outerScale={1.2}
            />
        </div>
    );
}
