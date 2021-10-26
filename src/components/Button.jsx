import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        z-index: 100;
        font-size: 2.2rem;
        background-color: ${(props) =>
            props.outline ? 'transparent' : 'var(--gray-1)'};
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--bright-golden);
        color: ${(props) =>
            props.outline ? 'var(--bright-golden)' : 'var(--deep-dark)'};
        margin-bottom: 5px;
        transition: 0.3s ease-out;
        position: relative;

        /* :hover {
            background-color: #2e2e2e;
        } */

        :before {
            content: '';
            background: linear-gradient(
                45deg,
                #8f5e25,
                #b87222,
                #c5761d,
                #fbf4a1,
                #8f8c84,
                #8f5e25,
                #f0b674
            );
            position: absolute;
            top: -4px;
            left: -4px;
            background-size: 400%;
            z-index: -1;
            filter: blur(3px);
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity 0.1s ease-in-out;
            border-radius: 10px;
        }

        :hover:before {
            opacity: ${(props) => (props.outline ? 0 : 1)};
        }

        :after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: ${(props) =>
                props.outline ? 'transparent' : 'var(--gray-1)'};
            left: 0;
            top: 0;
            border-radius: 10px;
        }

        @keyframes glowing {
            0% {
                background-position: 0 0;
            }
            50% {
                background-position: 500% 0;
            }
            100% {
                background-position: 0 0;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .button {
            font-size: 1.8rem;
        }
    }
`;

const Button = ({ btnLink = '/', btnText, outline }) => {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">
            <Link className="button" to={btnLink}>
                {btnText}
            </Link>
        </ButtonStyle>
    );
};

export default Button;
