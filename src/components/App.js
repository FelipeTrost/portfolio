import React, { useState, useRef, useEffect } from 'react';
import { Row, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEmail, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'
import notFound from '../media/not-found.png'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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

    return (
        <div className="App">
            <Header goto={goto} />

            <About propRef={about} />

            <Projects propRef={portfolio} />

            <Contact propRef={contact} />
        </div >
    );
}

export default App;
