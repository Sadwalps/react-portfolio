import React from 'react'
import Header from '../components/Header'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <>
      <div><Header /></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5" >
            
            <div style={{ position: "fixed", top: "100px" }} id='homelargescreendiv'>

              <h2 className='mt-5 ms-5'>SADWAL</h2>
              <Nav className="d-flex flex-column mt-5 ms-4" >
                <Nav.Link href="#action1" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Home</div></div></Nav.Link>
                <Nav.Link href="#action1" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>About</div></div></Nav.Link>
                <Nav.Link href="#action1" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Skills</div></div></Nav.Link>
                <Nav.Link href="#action1" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Projects</div></div></Nav.Link>
                <Nav.Link href="#action1" ><div className='d-flex  algin-items-center' id='navmaindiv'> <div id='hoverdiv'></div><div id='nav'>Contact</div></div></Nav.Link>
              </Nav>
            </div>
          </div>
          <div className="col-md-7 rounded p-0 ">
            <div className='mt-2  ' style={{ width: "100%",backgroundColor:"rgb(141, 55, 55)" }}>
              <div id='maincontainerdiv' >
                <h1 className='text-center pt-5 ' style={{ fontSize: "50px", fontWeight: "bold" }}>SADWAL PS</h1>
                <h2 className='text-center pt-2 pb-lg-5 pb-4' style={{ fontSize: "30px" }}>(Full Stack Developer)</h2>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "yellow" }}>Hello i'm Sadwal ps,</span> a passionate web developer with a bachelor's degree in computer science. I'm currently enhancing my skills in web development through ME(A)RN Stack course in luminar technolab. <br /> <br /> <span style={{ color: "yellow" }}>My Journey:</span> <br /> After completeting my degree, i discovered my love for web development. The intersection of technology and creativity fascinates me, and i'm exicited to build dynamic and user-friendly web applications. <br /> <br />  I aim to contribute to impactful projects and collaborate with talend individuals in the tech community. I'm eager to learn and grow as a developer
                </p>
                </div>


                {/* Education */}
                
                <div className='mt-lg-5 mt-3 pt-lg-5 pt-3  pb-lg-5 pb-3 ps-lg-5 ps-3  w-100' id='Educationdiv' >
                  <div className='border border-1 border-dark p-lg-4 p-3 text-center'>
                  <h2 style={{fontWeight:"bold"}}>EDUCATION</h2>
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
                <div className='pt-lg-5 pt-4 pb-lg-5 pb-4' style={{backgroundColor:"rgb(79, 13, 13)"}}>
                <h2 style={{fontWeight:"bold", textAlign:"center" , color:"white" }}>My Skills</h2>
                  <div className='container-fluid mt-lg-5 mt-4 mb-lg-5 mb-4'>
                    <div className="row">
                      <div className="col-md-6 mt-lg-4 mt-3 mb-lg-4 mb-3">
                        <div className="row">
                          <div className="col-4">
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                              {/* bar */}
                              <div className='mainbar'>
                              <div className='subbar' style={{height:"49px", textAlign:"center"}}>s</div>
                              
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
                              <div className='subbar' style={{height:"49px", textAlign:"center"}}>s</div>
                              
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
                              <div className='subbar' style={{height:"49px", textAlign:"center"}}>s</div>
                              
                              </div>
                              {/* logo */}
                              <div className='logodiv'>
                              <FontAwesomeIcon icon={faHtml5} />

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
                              <div className='subbar' style={{height:"49px", textAlign:"center"}}>s</div>
                              
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
                              <div className='subbar' style={{height:"49px", textAlign:"center"}}>s</div>
                              
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
                              <div className='subbar' style={{height:"49px", textAlign:"center"}}>s</div>
                              
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
              


              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam ea enim odit illum repellendus cumque, doloremque porro et, sapiente ducimus? Nisi deleniti architecto, dolore enim et sit eos libero quae. Laboriosam corporis veritatis debitis molestiae asperiores aliquid omnis impedit distinctio commodi praesentium eaque dolor cupiditate amet eveniet ea a, necessitatibus, similique facilis veniam iusto quas. Vitae, adipisci. Tempora harum temporibus voluptates officia laudantium omnis quod maxime eius nobis eveniet molestias culpa repellat sapiente necessitatibus ipsa quam, ratione, atque blanditiis sit saepe similique? Dolore quaerat ipsum placeat eum, maiores nisi, dignissimos aut vitae labore minus doloribus nam animi beatae rerum sed repellat? Alias tempore mollitia harum culpa animi ad excepturi eum officia, ipsa, reprehenderit possimus accusamus eveniet quidem magnam, tempora ullam modi! Id iusto quisquam, soluta laborum voluptatem, quod facere magnam perspiciatis harum natus exercitationem, dignissimos ratione quos aspernatur illo. Reprehenderit rerum, nam deserunt obcaecati laborum minus doloribus iusto voluptatibus libero rem quia magnam! Ad at fuga rem laboriosam nesciunt ipsam soluta minima dolorum maxime dolorem accusantium beatae dignissimos iusto sapiente, magni velit, quaerat quasi veniam. Neque recusandae reprehenderit voluptatum culpa minima dignissimos blanditiis, aperiam tempore voluptatibus, fugit numquam, praesentium accusamus tempora pariatur voluptatem ducimus maiores. Fugit perferendis architecto possimus sequi inventore neque magnam, eum distinctio recusandae, autem molestias maiores tempora! Aut corrupti officiis suscipit soluta magnam blanditiis repellendus tempore dolores labore aspernatur, vitae amet rem modi assumenda doloremque incidunt consequatur nemo facere beatae eum. Eveniet officia mollitia autem optio distinctio omnis velit magnam laudantium! Soluta vel quas autem veniam eum aperiam ipsa dignissimos tempora atque a provident repellat animi perferendis doloremque quos libero sint consequatur, ea rem eius assumenda! Reprehenderit, eos asperiores, esse ducimus autem eum soluta dicta deserunt tempore ex aperiam. Iste sapiente molestias assumenda necessitatibus. Numquam quis eligendi modi id consequatur. Labore assumenda porro mollitia facere sunt maxime dolor? Qui fugiat quod accusantium eveniet itaque voluptatum velit cumque beatae. Hic vel quae assumenda. Labore ullam debitis ad nulla, ducimus error. Nulla temporibus molestiae, explicabo, obcaecati provident ducimus enim dolores corrupti pariatur laborum nam dolore inventore in eligendi ab? Facilis maxime asperiores quas necessitatibus perferendis cumque iste rerum quam molestias? Aliquam incidunt optio accusantium harum facere quos saepe iste illum consectetur magnam natus ut, in nesciunt voluptatibus temporibus illo expedita, quasi consequuntur possimus cumque dolor alias quidem corrupti recusandae! Aperiam unde totam veniam nulla accusantium ipsum perspiciatis provident voluptatem, blanditiis adipisci dolores vero rerum exercitationem commodi quaerat cum fugit nostrum, non illum suscipit. Quas, ut. Minima dolorem minus eius dolore, numquam, odit neque voluptatibus placeat, aut quia rerum sequi? Enim ipsa iste repudiandae qui iure consequuntur quaerat, vero optio iusto sunt saepe! Recusandae ipsum earum animi totam. Fugit eos accusamus officiis. Provident quis voluptate voluptatem accusantium dolores commodi natus est repudiandae sapiente deleniti laudantium enim, cumque deserunt corporis recusandae. Omnis, sequi error quia reiciendis optio nesciunt maxime debitis obcaecati, repellat illo rerum blanditiis aperiam ipsam accusamus corrupti odit eveniet dolore explicabo iure esse! Odit ratione consequuntur neque optio modi saepe accusamus obcaecati, perspiciatis vel dolore, quidem officiis earum. Veritatis hic odio nulla suscipit aliquid veniam enim dolores sapiente, officia incidunt quis amet atque adipisci laboriosam voluptatum iusto. Esse excepturi iste officiis at veritatis inventore reprehenderit. Pariatur deserunt nisi corrupti qui atque vel sit ratione, quasi itaque tenetur nostrum! Enim, iusto? Laudantium quod blanditiis eaque officiis praesentium pariatur nesciunt vero placeat perferendis laborum! Illo minima officia sequi libero doloribus quos aperiam voluptatum, voluptate consectetur perferendis eius odio eaque tenetur optio vel veritatis nisi ducimus id sunt quam eveniet saepe, officiis soluta. Itaque tenetur sunt sapiente alias porro obcaecati optio ad nemo perferendis a, autem ipsa doloribus neque animi aut libero amet deserunt, fugit, voluptatibus perspiciatis? At, eveniet. Animi quae, harum mollitia alias nemo aut eveniet possimus tempore adipisci dignissimos dolor quaerat nihil amet, deserunt totam necessitatibus reprehenderit eius id. Nihil nobis saepe ullam. Commodi ad odio reiciendis voluptates ipsam rerum, laboriosam exercitationem iure illum impedit repellat, consequatur fugiat delectus eum alias deserunt. Necessitatibus officia itaque numquam, quaerat, obcaecati tempore nesciunt autem dolorem blanditiis dolores ex amet accusantium est quibusdam adipisci esse eligendi, iure eius sunt? Facilis, eos quas praesentium unde maiores veniam impedit sit repellat vero possimus magni totam dolorem, error architecto perspiciatis eveniet nulla assumenda consequatur? Pariatur harum minus recusandae corrupti laborum vel ratione officiis vero quidem beatae modi nobis ea maiores blanditiis, hic magnam facere nostrum, doloribus inventore rem illo voluptatem illum rerum? Rerum vitae voluptatem eligendi cumque doloribus voluptates autem, ducimus fugiat tempora sed nisi magnam eum dolorem nobis eius deleniti, numquam adipisci error fuga incidunt repellendus minima doloremque eos? Officia impedit, adipisci dignissimos facilis pariatur quas. Exercitationem quo, nesciunt vero harum corrupti architecto deleniti totam natus ullam officiis tenetur iure beatae dolorem temporibus eaque. Rem deleniti, excepturi obcaecati distinctio tempora expedita illo eius repellat voluptas aliquam commodi libero assumenda nesciunt neque, cum asperiores harum exercitationem! Ipsam modi, distinctio obcaecati veritatis ab perspiciatis dolorum tenetur maxime enim laboriosam possimus impedit quae nam eligendi provident iste quibusdam atque tempore, itaque nihil praesentium corrupti. Esse, obcaecati. Voluptates vero laudantium aspernatur harum rem reprehenderit distinctio, repudiandae mollitia maiores! Provident numquam quae consequatur accusamus obcaecati eos culpa dicta facilis sapiente placeat ipsa iusto atque nisi enim exercitationem voluptatibus natus, totam explicabo veniam quidem necessitatibus. Et laboriosam totam veniam mollitia. Illum nemo assumenda dolores alias nisi nostrum dicta accusantium sint quisquam quasi aliquam, debitis sed consequatur tenetur quos optio mollitia laudantium velit impedit corrupti delectus in? Quia magni itaque provident sunt ut aliquid, tempora possimus ipsum quisquam esse alias nulla eligendi dicta odit labore sed velit impedit temporibus voluptatum aliquam blanditiis saepe porro laboriosam! Quae odio assumenda magni aliquid facere pariatur consequatur eos harum similique suscipit, fuga blanditiis in non tempora excepturi, et fugiat exercitationem numquam unde! Harum, alias. Voluptate cum nisi minima ad ducimus, quam enim unde totam dolores saepe natus magnam, iste, repellat beatae dicta asperiores ullam rem accusantium laudantium dolore ratione. Sapiente numquam nemo qui ullam ipsam sed vel iste quisquam dignissimos aliquam doloribus molestiae reprehenderit laboriosam, facere aperiam necessitatibus sequi vero optio? Nihil obcaecati vitae distinctio exercitationem.
              </p>
             

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home