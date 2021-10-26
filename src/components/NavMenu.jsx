import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getElementRect } from '../utils/elementBoundingRect';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyles = styled.nav`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        display: flex;
        justify-content: center;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            width: 120px;
            transition: 0.4s ease background-color;
            margin: 0 20px;
            font-size: 2rem;
        }
        a {
            font-family: 'Montserrat SemiBold';
            border-radius: 50%;
            padding: 30px 15px;
            will-change: transform;
            transform-style: preserve-3d;
            transition: 0.25s ease-out;
            background-color: transparent;
            &:hover {
                background-color: var(--white);
                color: var(--gray-2);
            }
        }
        .active {
            color: var(--white);
        }
    }

    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
    }

    .close-menu-icon {
        display: none;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        padding: 0px;
        .hide-item {
            transform: translateY(calc(-100% - 1rem)) scale(0.5);
        }

        .mobile-menu-icon {
            display: block;
        }
        .navItems {
            position: absolute;
            top: 1rem;
            right: 1rem;
            flex-direction: column;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            width: 90%;
            max-width: 300px;
            padding: 2rem;
            border-radius: 12px;
            align-items: center;
            .close-menu-icon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
            }
            li {
                display: block;
                height: 7rem;
            }
            a {
                padding: 0;
                &:hover {
                    color: white;
                    background-color: var(--deep-dark);
                }
            }
        }
    }
`;

const NavMenu = () => {
    const refHome = useRef(null);
    const refAbout = useRef(null);
    const refProject = useRef(null);
    const refContact = useRef(null);

    const [showNav, SetShowNav] = useState(false);
    const [myX, setX] = useState(0);
    const [myY, setY] = useState(0);
    const [currRef, setCurrRef] = useState('');

    const findMyRef = (key) => {
        switch (key) {
            case 'Home':
                return refHome;
            case 'About':
                return refAbout;
            case 'Projects':
                return refProject;
            case 'Contact':
                return refContact;
            default:
                break;
        }
    };

    const handleMove = (e) => {
        const currentRef = findMyRef(e.target.textContent);

        setCurrRef(e.target.textContent);

        const [XPost, YPost] = getElementRect(e.clientX, e.clientY, currentRef);
        setX(XPost);
        setY(YPost);
    };

    const handleLeave = () => {
        setX(0);
        setY(0);
    };

    const enterStyles = {
        transform: `translate3d(${myX}px, ${myY}px, 0px)`
    };

    return (
        <NavMenuStyles>
            <div className="mobile-menu-icon" onClick={() => SetShowNav(true)}>
                <MdMenu />
            </div>

            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div
                    className="close-menu-icon"
                    onClick={() => SetShowNav(false)}
                >
                    <MdClose />
                </div>
                <li
                    onMouseLeave={handleLeave}
                    onMouseMove={handleMove}
                    ref={refHome}
                >
                    <NavLink
                        style={currRef === 'Home' ? enterStyles : null}
                        exact
                        to="/"
                        onClick={() => SetShowNav(false)}
                    >
                        Home
                    </NavLink>
                </li>
                <li
                    onMouseLeave={handleLeave}
                    onMouseMove={handleMove}
                    ref={refAbout}
                >
                    <NavLink
                        style={currRef === 'About' ? enterStyles : null}
                        to="/about"
                        onClick={() => SetShowNav(false)}
                    >
                        About
                    </NavLink>
                </li>
                <li
                    onMouseLeave={handleLeave}
                    onMouseMove={handleMove}
                    ref={refProject}
                    onClick={() => SetShowNav(false)}
                >
                    <NavLink
                        style={currRef === 'Projects' ? enterStyles : null}
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                </li>
                <li
                    onMouseLeave={handleLeave}
                    onMouseMove={handleMove}
                    ref={refContact}
                    onClick={() => SetShowNav(false)}
                >
                    <NavLink
                        style={currRef === 'Contact' ? enterStyles : null}
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
};

export default NavMenu;
