import React, { useEffect } from 'react'
import MyResume from './Resume'

const Resume = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);
    
    return (
        <div className="container">
            <MyResume />
        </div>
    )
}

export default Resume
