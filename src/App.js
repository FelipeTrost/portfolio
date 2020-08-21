import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Row, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEmail, faSpinner } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import notFound from './not-found.png'

function App() {
    const about = useRef();
    const portfolio = useRef();
    const contact = useRef()

    const goto = e => {
        e.preventDefault()
        const target = e.target.innerText
        switch (target) {
            case 'Felipe Trost':
            case 'About':
                about.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'Projects':
                portfolio.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'Contact':
                contact.current.scrollIntoView({ behavior: 'smooth' })
                break;
        }
    }

    const imageNotFound = e => {
        e.target.src = notFound;
    }

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/felipetrost/repos')
            .then(r => r.json())
            .then(r => {
                // This just removes the first item, because its the repo for github pages
                try {
                    r.shift();
                    setProjects(r);
                } catch (error) {
                    console.error("wrong response from githutb api")
                }
            })
    }, [])

    return (
        <div className="App">
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
                        <a href="https://github.com/FelipeTrost/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        {/* <a href="" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a> */}
                        <a href="mailto:felipe.trost@gmail.com">
                            <FontAwesomeIcon icon={faEmail} />
                        </a>
                    </div>
                </Container>

                <div className="diagonal"></div>
            </header>

            <section className="page-section" ref={about}>
                <Container fluid={true} >
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About Me</h2>
                        <h3 className="section-subheading text-muted">
                            Hi, i´m a chilean self taught full stack web developer, I also like to develop other stuff, like electronics, or in general programs and algorithms.
                            <br />
                            Hope you like my projects.
                        </h3>
                    </div>
                </Container>
            </section>

            <section className="page-section bg-light"  ref={portfolio}>
                <Container id="portfolio">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Projects</h2>
                    </div>

                    {projects.length === 0 && <FontAwesomeIcon icon={faSpinner} spin />}

                    <div className="portfolio-items">
                        {projects.map(p => (
                            
                                <div className="hover-effect-card" key={p.id}>
                                    <div className="portfolio-item ">
                                        <a className="portfolio-link portfolio-image" rel="noopener noreferrer" target="_blank" href={p.has_pages ? `https://felipetrost.github.io/${p.name}` : p.html_url}>


                                            <div className={"portfolio-hover" + (!p.has_pages ? " grey" : "")}>
                                                <div className="portfolio-hover-content">
                                                    {p.has_pages ? "Live version" : "Code"}
                                                </div>
                                            </div>


                                            <img className="img-fluid" onError={imageNotFound} src={`https://raw.githubusercontent.com/FelipeTrost/${p.name}/master/preview.png`} alt={p.name} />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">{p.name}</div>
                                            {p.language && (
                                                <div className="portfolio-caption-subheading text-muted">Stack: {p.language}</div>
                                            )}
                                            <div className="portfolio-caption-subheading text-muted">{p.description}</div>

                                            <Row className="justify-content-center buttons">
                                                {p.has_pages && (
                                                    <Button href={
                                                        `https://felipetrost.github.io/${p.name}`
                                                    } rel="noopener noreferrer" target="_blank" variant="outline-success" className="m5">Live</Button>
                                                )}
                                                <Button href={p.html_url} rel="noopener noreferrer" target="_blank" variant="outline-secondary">Code</Button>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            
                        ))}
                    </div>
                </Container>
            </section>

            <section className="page-section bg-dark contact" ref={contact}>
                <Container fluid={true} >
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">stay in touch</h2>
                        <Row className="justify-content-center buttons">
                            <div className="icons">
                                <a href="https://github.com/FelipeTrost/" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                {/* <a href="" rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a> */}
                                <a rel="noopener noreferrer" href="mailto:felipe.trost@gmail.com" >
                                    <FontAwesomeIcon icon={faEmail} />
                                </a>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>
        </div >
    );
}

export default App;
