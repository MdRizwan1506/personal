import React, { useEffect } from 'react'
import MyServices from './Services';
import Testimonials from './Testimonials';

const Services = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);
      
    return (
        <div className="container">
            <MyServices />
            <Testimonials />
        </div>
    )
}

export default Services