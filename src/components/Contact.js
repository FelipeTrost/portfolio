import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEmail } from '@fortawesome/free-solid-svg-icons'


function Contact({ propRef }) {
    return (
        <section className="page-section bg-dark contact" ref={propRef}>
            <Container fluid={true} >
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">stay in touch</h2>
                    <Row className="justify-content-center buttons">
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/felipe-trost-8a59b31b7" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/FelipeTrost/" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a rel="noopener noreferrer" href="mailto:felipe.trost@gmail.com" >
                                <FontAwesomeIcon icon={faEmail} />
                            </a>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Contact;