import React from 'react';
import styled from 'styled-components';
import FooterColumn from './FooterColumn';
import PText from './Ptext';

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer_col1 {
        flex: 2;
    }
    .footer_col2,
    .footer_col3,
    .footer_col4 {
        flex: 1;
    }
    .footer_col1_title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para {
            text-align: left;
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 1100px) {
        padding-top: 0rem;
        .container {
            flex-direction: column;
            gap: 0rem;

            & > div {
                margin-top: 5rem;
            }
        }

        .footer_col1 .para {
            width: 100%;
            margin: 0;
        }
        .copyright {
            .container {
                .para {
                    font-size: 12px;
                }
            }
        }
    }
`;

const FooterSection = () => {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer_col1">
                    <h1 className="footer_col1_title">Mohamed Salem</h1>
                    <PText>
                        A freelance Web Developer and Designer from Cairo,
                        Egypt. I always make websites that have unique designs
                        and also has a good performance rate.
                    </PText>
                </div>

                <div className="footer_col2">
                    <FooterColumn
                        heading="Important Links"
                        links={[
                            {
                                title: 'Home',
                                path: '/'
                            },
                            {
                                title: 'About',
                                path: '/about'
                            },
                            {
                                title: 'Projects',
                                path: '/projects'
                            },
                            {
                                title: 'Contact',
                                path: '/contact'
                            }
                        ]}
                    />
                </div>

                <div className="footer_col3">
                    <FooterColumn
                        heading="Contact Info"
                        links={[
                            {
                                title: '+20-1281115712',
                                path: 'tel:+20 1281115712'
                            },
                            {
                                title: 'mohamed_salem331@hotmail.com',
                                path: 'mailto:mohamed_salem331@hotmail.com'
                            },
                            {
                                title: 'Maadi, Cairo, Egypt',
                                path: 'https://www.google.com/maps/place/Maadi'
                            }
                        ]}
                    />
                </div>

                <div className="footer_col4">
                    <FooterColumn
                        heading="social Links"
                        links={[
                            {
                                title: 'Facebook',
                                path: 'https://www.facebook.com/mohamed.motaleb.3/'
                            },
                            {
                                title: 'Twitter',
                                path: 'http://twitter.com'
                            },
                            {
                                title: 'Instagram',
                                path: 'https://www.instagram.com/mohamed_salem441/'
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>© 2021 - Designed By | Mohamed Salem</PText>
                </div>
            </div>
        </FooterStyles>
    );
};

export default FooterSection;
