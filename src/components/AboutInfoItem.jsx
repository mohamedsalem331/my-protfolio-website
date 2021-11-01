import React from 'react';
import styled from 'styled-components';
import PText from './Ptext';

const AboutItemStyles = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 3rem;
    .title {
        font-size: 2.4rem;
    }
    .items {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        position: absolute;
        left: 18rem;
    }
    .item {
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        .items {
            position: static;
            gap: 1rem;
        }
        .title {
            font-size: 2rem;
        }
    }
`;

export default function AboutInfoItem({
    title = 'Title',
    items = ['HTML', 'CSS']
}) {
    return (
        <AboutItemStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
            </div>
        </AboutItemStyles>
    );
}
