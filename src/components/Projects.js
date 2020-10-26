import React, { useState, useEffect } from 'react';
import { Row, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import notFound from '../media/not-found.png'

const banned = [262933295, 287635785]

function Projects({ propRef }) {
    const imageNotFound = e => e.target.src = notFound;

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/felipetrost/repos')
            .then(r => r.json())
            .then(r => {
                // This just removes the first item, because its the repo for github pages
                try {
                    console.log(r)
                    setProjects(
                        r
                            .filter(rep => !rep.fork && !banned.includes(rep.id))

                    );
                } catch (error) {
                    console.error("wrong response from githutb api")
                }
            })
    }, [])

    return (
        <section className="page-section bg-grey" ref={propRef}>
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
    );
}

export default Projects;
