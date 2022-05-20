import React, { useEffect, useRef } from 'react'
import "./ServiceCard.css"

const ServiceCard = ({ heading, desc, linkText, link, image }) => {

    const myref = useRef()

    useEffect(() => {
        const myObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                myref.current.classList.add("fadeUp")
                myObserver.unobserve(myref.current)
            }
        })
        myObserver.observe(myref.current)
    }, [])


    return (
        <div className={`row`} ref={myref}>
            <div className="col-6">
                <div className="services_description">
                    <h2 className='servicesH2'>{heading}</h2>
                    <h3 className='servicesH3'>{desc}</h3>
                    <a href={`/${link}`} className='servicesLink'>
                        <p className='pr-3'>{linkText}</p>
                        <img src="https://www.xivtech.io./Arrow-black.svg" alt="arrow-black" />
                    </a>
                </div>
            </div>
            <div className="col-6">
                <h2 className='servicesH2_screen'>{heading}</h2>
                <img src={`/images/${image}`} alt="noimg" className='serviceImage' />
            </div>
        </div>
    )
}

export default ServiceCard