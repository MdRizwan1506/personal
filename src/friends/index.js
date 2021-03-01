import React, { useEffect } from 'react'
import Carsouel from './Carsouel'

const Friends = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);
      
    return (
        <div className="container" >
            <Carsouel />
        </div>
    )
}

export default Friends
