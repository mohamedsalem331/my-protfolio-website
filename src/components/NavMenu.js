import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
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
            height: 130px;
            width: 150px;
            transition: 0.3s ease background-color;
            margin: 0 20px;
            font-size: 2rem;
        }   

        a {
            font-family: 'Montserrat SemiBold';
            border-radius: 50%;
            padding: 30px;
            will-change: transform;
            transform-style: preserve-3d;
            transition: 0.4s ease-out;
            background-color: transparent;
            &:hover {
                background-color: var(--white);
                color: var(--gray-2);
            }
        }
    
        .active {
            color: var(--white)
        }
    }
`

const NavMenu = () => {
    const refHome = useRef(null)
    const refAbout = useRef(null)
    const refProject = useRef(null)
    const refContact = useRef(null)


    const [myX, setX] = useState(0)
    const [myY, setY] = useState(0)
    const [currRef, setCurrRef] = useState('')

    const findMyRef = (key) => {
        switch (key) {
            case "Home":
                return refHome
            case "About":
                return refAbout
            case "Projects":
                return refProject
            case "Contact":
                return refContact
            default:
                break;
        }
    }

    const handleMove = (e) => {
        const currentRef = findMyRef(e.target.textContent)

        setCurrRef(e.target.textContent)

        let XPost = ((e.clientX - (currentRef.current.getBoundingClientRect().left + currentRef.current.getBoundingClientRect().width / 2)) / 1.5).toFixed(5)
        let YPost = ((e.clientY - (currentRef.current.getBoundingClientRect().top + currentRef.current.getBoundingClientRect().height / 2)) / 1.5).toFixed(5)

        setX(XPost)
        setY(YPost)
    }

    const handleLeave = () => {
        setX(0)
        setY(0)
    }

    const enterStyles = {
        transform: `translate3d(${myX}px, ${myY}px, 0px)`,
    }

    return (
        <NavMenuStyles>
            <ul>
                <li onMouseLeave={handleLeave} onMouseMove={handleMove} ref={refHome}>
                    <NavLink style={currRef === "Home" ? enterStyles : null} exact to="/">Home</NavLink>
                </li>
                <li onMouseLeave={handleLeave} onMouseMove={handleMove} ref={refAbout}>
                    <NavLink style={currRef === "About" ? enterStyles : null} to="/about">About</NavLink>
                </li>
                <li onMouseLeave={handleLeave} onMouseMove={handleMove} ref={refProject}>
                    <NavLink style={currRef === "Projects" ? enterStyles : null} to="/projects">Projects</NavLink>
                </li>
                <li onMouseLeave={handleLeave} onMouseMove={handleMove} ref={refContact}>
                    <NavLink style={currRef === "Contact" ? enterStyles : null} to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    )
}

export default NavMenu
