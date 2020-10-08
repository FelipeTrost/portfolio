import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEmail, faFileAlt } from '@fortawesome/free-solid-svg-icons'

const Header = ({ goto }) => (
    <header className="masthead">
        <Navbar bg="transparent" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={goto}>Felipe Trost</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" as="ul">

                    <Nav.Item>
                        <Nav.Link href="/home" onClick={goto}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home" onClick={goto}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home" onClick={goto}>Contact</Nav.Link>
                    </Nav.Item>


                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container>
            <div className="masthead-heading text-uppercase">Felipe Trost</div>
            <div className="masthead-subheading">Fullstack web development + some extra stuff</div>
        </Container>

        <Container className="icon">
            <div className="icons">
                <a href="https://www.linkedin.com/in/felipe-trost-8a59b31b7" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/FelipeTrost/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:felipe.trost@gmail.com">
                    <FontAwesomeIcon icon={faEmail} />
                </a>
                <a href="cv.pdf" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faFileAlt} />
                </a>
            </div>
        </Container>

        <div className="diagonal"></div>
    </header>
)

export default Header