import React from 'react'
import Header from '../components/Header'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faHtml5, faReact, faSquareGithub, faSquareJs } from '@fortawesome/free-brands-svg-icons';

import Carousel from 'react-bootstrap/Carousel';

import restaurent from '../assets/restaurant-website.png'
import phonotics from '../assets/phonotics.png'
import portfoliotcss from '../assets/portfolio-tailwindcss.png'
import weatherwatch from '../assets/weather-watch.png'
import libo from '../assets/libo-library.png'
import ubereats from '../assets/uber-eats-clone.png'
import bmi from '../assets/bmi-calculator.png'
import imagegallery from '../assets/image-gallery.png'
import profilephoto from '../assets/profile image.jpg'

import { faLink } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';



function Home() {
  return (
    <>
    <div id='maindiv'>
      <div id='headerdiv'><Header /></div>
      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-5" >

            <div style={{ position: "fixed", top: "100px" , color:"white"}} id='homelargescreendiv'>

              <h2 className='mt-5 ms-5'>SADWAL</h2>
              <Nav className="d-flex flex-column mt-5 ms-4 " >
                <Nav.Link href="#maincontainerdiv" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Home</div></div></Nav.Link>
                <Nav.Link href="#aboutdiv" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>About</div></div></Nav.Link>
                <Nav.Link href="#skillsdiv" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Skills</div></div></Nav.Link>
                <Nav.Link href="#projectsdiv" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Projects</div></div></Nav.Link>
                <Nav.Link href="#contactdiv" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Contact</div></div></Nav.Link>
              </Nav>
            </div>
          </div>
          <div className="col-md-7 rounded p-0 ">
            <div className='  ' style={{ width: "100%", backgroundColor: "rgb(122, 37, 37)" }}>
              <div id='maincontainerdiv' >
                <h1 className='text-center pt-5 ' style={{ fontSize: "50px", fontWeight: "bold" }}>SADWAL PS</h1>
                <h2 className='text-center pt-2 pb-lg-5 pb-4' style={{ fontSize: "30px" }}>(Frontend Developer)</h2>
                <div id='aboutdiv p-2'>
                  <div className='border border-3 border-dark p-2'>
                    <img src={profilephoto} alt="" className='w-100' id='profilephoto' />
                  </div>
                </div>
                <p style={{ textAlign: "justify", marginTop:"20px" }}>
                  <span style={{ color: "yellow" }}>Hello i'm Sadwal ps,</span> a passionate web developer with a bachelor's degree in computer science. I'm currently enhancing my skills in web development through ME(A)RN Stack course in luminar technolab. <br /> <br /> <span style={{ color: "yellow" }}>My Journey:</span> <br /> After completeting my degree, i discovered my love for web development. The intersection of technology and creativity fascinates me, and i'm exicited to build dynamic and user-friendly web applications. <br /> <br />  I aim to contribute to impactful projects and collaborate with talend individuals in the tech community. I'm eager to learn and grow as a developer
                </p>
              </div>


              {/* Education */}

              <div className='mt-lg-5 mt-3 pt-lg-5 pt-3  pb-lg-5 pb-3 ps-lg-5 ps-3  w-100' id='Educationdiv' >
                <div className='border border-1 border-dark p-lg-4 p-3 text-center'>
                  <h2 style={{ fontWeight: "bold" }}>EDUCATION</h2>
                  <div className='mt-lg-4 mt-3'>
                    <div >
                      <h4 >COMPUTER SCIENCE</h4>
                      <div ></div>
                      <p >2019-2021</p>
                      <p >ST. THOMAS HIGHER SECONDARY SCHOOL THOPE, THRISSUR</p>
                    </div>
                    <div>
                      <div >
                        <h4 >BSC COMPUTER SCIENCE</h4>
                        <div ></div>
                        <p >2021-2024</p>
                        <p >SRI C ACHUTHA MENON GOVERNMENT COLLEGE, THRISSUR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* My skills */}
              <div className='pt-lg-5 pt-4 pb-lg-5 pb-4' style={{ backgroundColor: "rgb(79, 13, 13)" }} id='skillsdiv'>
                <h2 style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>My Skills</h2>
                <div className='container-fluid mt-lg-5 mt-4 mb-lg-5 mb-4'>
                  <div className="row">
                    <div className="col-md-6 mt-lg-4 mt-3 mb-lg-4 mb-3">
                      <div className="row">
                        <div className="col-4">
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* bar */}
                            <div className='mainbar'>
                              <div className='subbar' style={{ height: "210px", textAlign: "center" }}>85%</div>

                            </div>
                            {/* logo */}
                            <div className='logodiv'>
                              <FontAwesomeIcon icon={faHtml5} />

                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* bar */}
                            <div className='mainbar'>
                              <div className='subbar' style={{ height: "208px", textAlign: "center" }}>82%</div>

                            </div>
                            {/* logo */}
                            <div className='logodiv'>
                              <FontAwesomeIcon icon={faCss3Alt} />

                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* bar */}
                            <div className='mainbar'>
                              <div className='subbar' style={{ height: "184px", textAlign: "center" }}>75%</div>

                            </div>
                            {/* logo */}
                            <div className='logodiv'>
                              <FontAwesomeIcon icon={faBootstrap} />

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-6 mt-lg-4 mt-3 mb-lg-4 mb-3">
                      <div className="row">
                        <div className="col-4">
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* bar */}
                            <div className='mainbar'>
                              <div className='subbar' style={{ height: "168px", textAlign: "center" }}>70%</div>

                            </div>
                            {/* logo */}
                            <div className='logodiv'>
                              <FontAwesomeIcon icon={faSquareJs} />

                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* bar */}
                            <div className='mainbar'>
                              <div className='subbar' style={{ height: "186px", textAlign: "center" }}>77%</div>

                            </div>
                            {/* logo */}
                            <div className='logodiv'>
                              <FontAwesomeIcon icon={faReact} />

                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            {/* bar */}
                            <div className='mainbar'>
                              <div className='subbar' style={{ height: "186px", textAlign: "center" }}>77%</div>

                            </div>
                            {/* logo */}
                            <div className='logodiv'>
                              <FontAwesomeIcon icon={faHtml5} />

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* My Projects */}
              
              <div className='pt-lg-5 pt-4 pb-lg-5 pb-4' style={{ backgroundColor: "rgb(15, 107, 93)" }} id='projectsdiv' >
                <h2 style={{ fontWeight: "bold", textAlign: "center", color: "white" }} className='mb-lg-5 mb-3'>My Projects</h2>

                {/* carousal */}
                <Carousel data-bs-theme="dark " className='mt-lg-5 mt-4 mb-lg-5 mb-4'>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={restaurent}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://startling-griffin-e8c4ad.netlify.app"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/restaurant-website"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>Restaurant Website</h5>  
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://startling-griffin-e8c4ad.netlify.app"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/restaurant-website"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div>    
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={phonotics}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://darling-axolotl-6566d4.netlify.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/Mobile-shop-website"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>Mobile-shop Website</h5>  
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://darling-axolotl-6566d4.netlify.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/Mobile-shop-website"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div>    
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="row">
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={portfoliotcss}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://tranquil-moonbeam-34d74f.netlify.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/Responsive-portfolio"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          
                          <h5 className='mt-lg-4 mt-3'>Portfolio using Tailwind CSS</h5>  
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://tranquil-moonbeam-34d74f.netlify.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/Responsive-portfolio"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={weatherwatch}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://weather-application-smoky-rho.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/weather-application"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>Weather Application</h5>  
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://weather-application-smoky-rho.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/weather-application"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div>    
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="row">
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={libo}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://library-azure-seven.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/library"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>Library Website</h5>     
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://library-azure-seven.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/library"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div> 
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={ubereats}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://uber-eats-clone-omega.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/uber-eats--clone"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>Uber-eats-clone</h5>    
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://uber-eats-clone-omega.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/uber-eats--clone"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="row">
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={bmi}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://b-calculator.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href="https://github.com/Sadwalps/b-calculator"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>BMI Calculator</h5>     
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://b-calculator.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href="https://github.com/Sadwalps/b-calculator"><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div> 
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        {/* project card */}
                        <div>
                          <div className='projectmaindiv'  >
                            <img src={imagegallery}alt="" className='w-100' />
                          <div  className='projecthoverdiv' > 
                            <div className='projecthoversubdiv'>
                            <a href="https://image-gallery-frontend-phi.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                            <a href=""><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                            </div>
                          </div>
                          <h5 className='mt-lg-4 mt-3'>Image-Gallery using Json-server</h5>    
                          
                          <div className='projectlinksmmaindiv'>
                          <div className='projectlinksmdiv'>
                          <a href="https://image-gallery-frontend-phi.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:"rgb(16, 190, 7)"}}/></a>
                          <a href=""><FontAwesomeIcon icon={faSquareGithub} style={{color:"rgb(7, 68, 190)"}} /></a>
                          </div>
                          </div>  
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>

              {/* Contact */}
              <div className='pt-lg-5 pt-4 pb-lg-5 pb-4' style={{ backgroundColor: "rgb(237, 203, 239)" }} id='contactdiv'>
              <h2 style={{ fontWeight: "bold", textAlign: "center", color: "black" }} className='mb-lg-5 mb-3'>Contact Me</h2>

              <div className='container-fluid mt-lg-5 mt-3 mb-lg-5 mb-3'>
                <div className="row">
                  <div className="col-md-7 p-2">
                    <form action="">
                    <input type="text" className='form-control mt-lg-4 mt-2 pt-lg-3 pb-lg-3 pt-2 pb-2' style={{borderRadius:"0px", backgroundColor:"rgb(166, 65, 65)", border:"1px solid ", borderColor:"white"}} placeholder='Your Name'  />
                    <input type="email" className='form-control mt-lg-4 mt-2 pt-lg-3 pb-lg-3 pt-2 pb-2' style={{borderRadius:"0px", backgroundColor:"rgb(166, 65, 65)", border:"1px solid ", borderColor:"white"}} placeholder='Your Email' />
                    <textarea name="" id="" className='form-control mt-lg-4 mt-2 pt-lg-3 pb-lg-3 pt-2 pb-2' style={{borderRadius:"0px", backgroundColor:"rgb(166, 65, 65)", border:"1px solid "}} placeholder='Message'>

                    </textarea>
                     <button type='reset' className='btn mt-lg-4 mt-2 p-lg-3 p-2 ' id='contactsubmitbutton' >submit now</button>
                    </form>

                  </div>
                  <div className="col-md-5  p-3">
                    <h4 className='mt-3' style={{color:"black"}}>Email</h4>
                    <p style={{color:"rgb(44, 39, 39)"}}>sadwalps2255@gmail.com</p>
                    

                    <h4 style={{color:"black"}}>Phone</h4>
                    <p style={{color:"rgb(44, 39, 39)"}}>9207281049</p>
                    
                  
                  </div>
                </div>
              </div>

              </div>



             

            </div>
            <div><Footer/></div>
            
          </div>
        </div>
      </div>
      </div>
    </>

  )
}

export default Home