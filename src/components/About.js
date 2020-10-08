import React from 'react';
import { Container } from 'react-bootstrap';

function About({ propRef }) {
    return (
        <section className="page-section" ref={propRef}>
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
    );
}

export default About;
