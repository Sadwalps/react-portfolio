import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
   <>
   <div className='container-fluid  ' style={{backgroundColor:"rgb(122, 37, 37)"}}>
    <div className="row pt-lg-5 pt-4 pb-lg-5 pb-3">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center" >
            <h1 className='mt-lg-4 mt-3 mb-lg-4 ' style={{color:"rgb(237, 203, 239)"}}>SADWAL</h1>
            <div className='d-flex justify-content-between mb-lg-5 mb-4 p-lg-1 p-md-2 p-4 '>
                <div className='footerlogodiv'><a href=""> <FontAwesomeIcon icon={faWhatsapp} /></a></div>
                <div className='footerlogodiv'><a href=""> <FontAwesomeIcon icon={faInstagram} /></a></div>
                <div className='footerlogodiv'><a href=""> <FontAwesomeIcon icon={faLinkedinIn} /></a></div>
                <div className='footerlogodiv'><a href=""> <FontAwesomeIcon icon={faGithub} /></a></div>
                
            </div>
        </div>
        <div className="col-md-3"></div>
    </div>
    
   </div>
   </>
  )
}

export default Footer