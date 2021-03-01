import React, { useEffect } from 'react'
import Heading from './Heading'
import MyInformation from './Contact';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);
      
    return (
        <div className="container">
            <Heading />
            <MyInformation />
        </div>
    )
}

export default ContactUs
