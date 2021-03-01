import React, { useEffect } from 'react'
import MyPortfolio from './Portfolio';

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
      
    return (
        <div className="container">
            <MyPortfolio />
        </div>
    )
}

export default Portfolio