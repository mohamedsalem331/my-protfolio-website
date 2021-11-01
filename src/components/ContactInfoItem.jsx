import React from 'react';
import styled from 'styled-components';
import PText from './Ptext';

const ItemStyles = styled.div`
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon {
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1.2rem;
        align-items: center;
        border-radius: 50%;
    }
    svg {
        width: 3.5rem;
    }
    @media only screen and (max-width: 430px) {
        padding: 1rem;
        svg {
            width: 2rem;
        }
    }
`;

const ContactInfoItem = ({ icon, text }) => {
    return (
        <ItemStyles>
            <div className="icon">{icon}</div>
            <div className="info">
                <PText>{text}</PText>
            </div>
        </ItemStyles>
    );
};

export default ContactInfoItem;
