import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
        margin: 0;
    }
`;

const Ptext = (props) => {
    return <PStyle className="para">{props.children}</PStyle>;
};

export default Ptext;
