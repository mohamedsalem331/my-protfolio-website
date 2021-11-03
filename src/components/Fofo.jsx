// import React, { useRef, useEffect, useState } from 'react';
// import styled from 'styled-components';

// const CursorStyles = styled.div`
//     z-index: 999;
//     display: block;
//     position: fixed;
//     border-radius: 50%;
//     pointer-events: none;
//     width: 44px;
//     height: 44px;
//     background-color: rgba(255, 160, 1, 0.3);
//     transition-timing-function: ease-out;
//     /* transition-duration: 200ms; */
//     /* -webkit-transition-duration: 200ms; */
//     /* transform-origin: 75% 75%; */
//     will-change: transform;
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 1;
// `;

// const CursorStylesText = styled.div`
//     z-index: 999;
//     display: block;
//     position: fixed;
//     border-radius: 50%;
//     width: 8px;
//     height: 8px;
//     pointer-events: none;
//     background-color: rgb(255, 255, 255);
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 1;
// `;

// const Contain = styled.div`
//     z-index: 999;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 100vh;
//     width: 100vw;
//     /* background-color: #2c1c1c; */
// `;

// const Fofo = () => {
//     const [coords, setCoords] = useState({ x: 0, y: 0 });

//     const ref = useRef(null);

//     const handleMove = (e) => {
//         setCoords({ x: e.clientX, y: e.clientY });

//         coords.x = (coords.x + e.clientX - coords.x) / 8;
//         console.log(coords.x);
//         console.log(e.clientX);
//         console.log('qweq');
//     };
//     return (
//         <>
//             <Contain onMouseMove={handleMove} ref={ref} />
//             <CursorStyles
//                 style={{ top: `${coords.y}px`, left: `${coords.x}px` }}
//             ></CursorStyles>
//             <CursorStylesText
//                 style={{ top: `${coords.y}px`, left: `${coords.x}px` }}
//             ></CursorStylesText>
//         </>
//     );
// };

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
