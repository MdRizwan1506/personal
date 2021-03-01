import React, { useEffect } from 'react'
import About from './About';
import Facts from './Facts';
import Skills from './Skills';

const MyAbout = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="container">
            <About />
            <Facts />
            <Skills />
        </div>
    )
}

export default MyAbout
