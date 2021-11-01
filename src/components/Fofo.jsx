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
//     transition-duration: 100ms;
//     -webkit-transition-duration: 100ms;
//     will-change: width, height, transform, border;
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
//     transition: opacity 0.15s ease-in-out 0s, transform 0.25s ease-in-out 0s;
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 1;
// `;

// const Contain = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 100vh;
//     width: 100vw;
//     /* background-color: #2c1c1c; */
// `;

// const Fofo = ({ Y, X }) => {
//     // const [myX, setX] = useState(0);
//     // const [myY, setY] = useState(0);

//     // const ref = useRef(null);

//     const handleMove = (e) => {
//         // setX(e.clientX);
//         // setY(e.clientY);
//         console.log('qwq');
//     };
//     return (
//         <>
//             <Contain></Contain>
//             {/* <CursorStyles
//                 style={{ top: `${Y}px`, left: `${X}px` }}
//             ></CursorStyles>
//             <CursorStylesText
//                 style={{ top: `${Y}px`, left: `${X}px` }}
//             ></CursorStylesText> */}
//         </>
//     );
// };

// export default Fofo;
