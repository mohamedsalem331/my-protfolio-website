import React from 'react';
import styled from 'styled-components';

const ColStyle = styled.div`
    .heading {
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
    li {
        margin-bottom: 1rem;
    }
    a {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 1100px) {
        .heading {
            font-size: 2.4rem;
            margin-bottom: 0rem;
        }
        li {
            margin-bottom: 0.2rem;
        }
    }
`;

const FooterColumn = ({ heading = 'default', links = [] }) => {
    return (
        <ColStyle>
            <h1 className="heading">
                {heading}
                <ul>
                    {links.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={item.path}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </h1>
        </ColStyle>
    );
};

export default FooterColumn;
